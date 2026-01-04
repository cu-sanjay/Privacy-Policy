import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Public Routes
  app.get(api.policies.list.path, async (req, res) => {
    const policies = await storage.getPolicies();
    res.json(policies);
  });

  app.get(api.policies.getBySlug.path, async (req, res) => {
    const policy = await storage.getPolicyBySlug(req.params.slug);
    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }
    res.json(policy);
  });

  // Admin Routes (Simplified for this MVP, no auth yet as per lite rules unless requested)
  app.post(api.policies.create.path, async (req, res) => {
    try {
      const input = api.policies.create.input.parse(req.body);
      const policy = await storage.createPolicy(input);
      res.status(201).json(policy);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.put(api.policies.update.path, async (req, res) => {
    try {
      const input = api.policies.update.input.parse(req.body);
      const policy = await storage.updatePolicy(Number(req.params.id), input);
      if (!policy) return res.status(404).json({ message: "Policy not found" });
      res.json(policy);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.delete(api.policies.delete.path, async (req, res) => {
    await storage.deletePolicy(Number(req.params.id));
    res.status(204).send();
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getPolicies();
  if (existing.length === 0) {
    // YouTube Policy
    await storage.createPolicy({
      slug: "youtube",
      title: "YouTube Ad Blocker 2025 Privacy Policy",
      content: `
# YouTube Ad Blocker 2025 Privacy Policy
**Last Updated: August 2025**

## Overview
YouTube Ad Blocker 2025 ("we," "our," or "the extension") is committed to protecting your privacy. This Privacy Policy explains how our browser extension handles information when you use our service.

## Information We Do NOT Collect
We want to be crystal clear: We do NOT collect, store, transmit, or share any personal information.
- No personal identification
- No browsing history
- No video preferences or search queries
- No IP addresses or device/browser details
- No cookies or tracking data
- No analytics or telemetry

## Information Stored Locally
We only store the following settings locally on your device:
- Ad playback speed (1x-16x)
- Normal video speed (0.25x-2x)
- Extension enabled/disabled status
- Debug mode (if enabled)

This data:
- Stays on your device only
- Is not shared or transmitted
- Is deleted when you uninstall the extension

## How the Extension Works
- Detects ad elements on YouTube
- Temporarily increases video playback speed during ads
- Returns to your preferred speed after ads
- Provides settings via a browser popup

## Permissions
- **activeTab**: Used to control YouTube playback
- **storage**: Saves your preferences locally
- **host_permissions**: Allows functionality on YouTube domains

## Data Security
- Settings are stored using browser’s secure APIs
- No external servers are contacted
- No sensitive data is stored, transmitted, or exposed

## Third-Party Services
We do not use:
- Google Analytics
- Advertising networks
- Social media integrations
- External APIs

## Children’s Privacy
The extension is suitable for all ages and complies with COPPA. No data is collected from children or adults.

## Your Rights & Controls
- View and modify your settings via the popup
- Delete all data by uninstalling the extension
- Clear browser storage to reset preferences

## Contact Information
Email: privacy@ytadblocker2025.com
      `
    });

    // Gemini Policy
    await storage.createPolicy({
      slug: "gemini",
      title: "Gemini Watermark Remover Privacy Policy",
      content: `
# Gemini Watermark Remover Privacy Policy
**Last Updated: January 2026**

## Overview
Gemini Watermark Remover ("we," "our," or "the extension") is dedicated to user privacy. This policy outlines our practices regarding data collection and usage.

## Information Collection
**We do NOT collect, store, or transmit any user data.**
The extension operates entirely client-side within your browser. 

## Data Handling
- **Image Processing**: All image processing (watermark removal) occurs locally on your device using mathematical algorithms. No images are uploaded to any server.
- **No Analytics**: We do not track usage or collect telemetry data.
- **No Personal Data**: We do not access or store personal information, browsing history, or IP addresses.

## Permissions
- **host_permissions (gemini.google.com)**: Strictly used to intercept image download requests on the Gemini domain to apply watermark removal processing before saving the file.

## Contact
For questions, please contact the developer via the support email listed on the store page.
      `
    });
  }
}
