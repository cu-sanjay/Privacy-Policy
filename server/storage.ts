import { db } from "./db";
import { policies, type InsertPolicy, type Policy } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getPolicies(): Promise<Policy[]>;
  getPolicy(id: number): Promise<Policy | undefined>;
  getPolicyBySlug(slug: string): Promise<Policy | undefined>;
  createPolicy(policy: InsertPolicy): Promise<Policy>;
  updatePolicy(id: number, updates: Partial<InsertPolicy>): Promise<Policy>;
  deletePolicy(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getPolicies(): Promise<Policy[]> {
    return await db.select().from(policies);
  }

  async getPolicy(id: number): Promise<Policy | undefined> {
    const [policy] = await db.select().from(policies).where(eq(policies.id, id));
    return policy;
  }

  async getPolicyBySlug(slug: string): Promise<Policy | undefined> {
    const [policy] = await db.select().from(policies).where(eq(policies.slug, slug));
    return policy;
  }

  async createPolicy(insertPolicy: InsertPolicy): Promise<Policy> {
    const [policy] = await db.insert(policies).values(insertPolicy).returning();
    return policy;
  }

  async updatePolicy(id: number, updates: Partial<InsertPolicy>): Promise<Policy> {
    const [policy] = await db.update(policies).set(updates).where(eq(policies.id, id)).returning();
    return policy;
  }

  async deletePolicy(id: number): Promise<void> {
    await db.delete(policies).where(eq(policies.id, id));
  }
}

export const storage = new DatabaseStorage();
