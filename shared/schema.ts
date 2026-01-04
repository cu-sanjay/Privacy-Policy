import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const policies = pgTable("policies", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(), // e.g. "youtube", "gemini"
  title: text("title").notNull(),
  content: text("content").notNull(), // Markdown or HTML content
  lastUpdated: timestamp("last_updated").defaultNow(),
  isPublished: boolean("is_published").default(true),
});

export const insertPolicySchema = createInsertSchema(policies).omit({
  id: true,
  lastUpdated: true
});

export type Policy = typeof policies.$inferSelect;
export type InsertPolicy = z.infer<typeof insertPolicySchema>;
