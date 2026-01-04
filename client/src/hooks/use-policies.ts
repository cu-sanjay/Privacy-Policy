import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { type InsertPolicy, type Policy } from "@shared/schema";

// GET /api/policies
export function usePolicies() {
  return useQuery({
    queryKey: [api.policies.list.path],
    queryFn: async () => {
      const res = await fetch(api.policies.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch policies");
      return api.policies.list.responses[200].parse(await res.json());
    },
  });
}

// GET /api/policies/:slug
export function usePolicy(slug: string) {
  return useQuery({
    queryKey: [api.policies.getBySlug.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.policies.getBySlug.path, { slug });
      const res = await fetch(url, { credentials: "include" });
      
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch policy");
      
      return api.policies.getBySlug.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}

// POST /api/policies
export function useCreatePolicy() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertPolicy) => {
      const validated = api.policies.create.input.parse(data);
      const res = await fetch(api.policies.create.path, {
        method: api.policies.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.policies.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to create policy");
      }
      return api.policies.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.policies.list.path] });
    },
  });
}

// PUT /api/policies/:id
export function useUpdatePolicy() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updates }: { id: number } & Partial<InsertPolicy>) => {
      const validated = api.policies.update.input.parse(updates);
      const url = buildUrl(api.policies.update.path, { id });
      
      const res = await fetch(url, {
        method: api.policies.update.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.policies.update.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 404) throw new Error("Policy not found");
        throw new Error("Failed to update policy");
      }
      return api.policies.update.responses[200].parse(await res.json());
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [api.policies.list.path] });
      queryClient.invalidateQueries({ queryKey: [api.policies.getBySlug.path, data.slug] });
    },
  });
}

// DELETE /api/policies/:id
export function useDeletePolicy() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const url = buildUrl(api.policies.delete.path, { id });
      const res = await fetch(url, { 
        method: api.policies.delete.method,
        credentials: "include" 
      });

      if (res.status === 404) throw new Error("Policy not found");
      if (!res.ok) throw new Error("Failed to delete policy");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.policies.list.path] });
    },
  });
}
