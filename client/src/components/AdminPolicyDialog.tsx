import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { insertPolicySchema, type Policy } from "@shared/schema";
import { useCreatePolicy, useUpdatePolicy } from "@/hooks/use-policies";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Add a confirm content string length validation manually since it might not be in schema
const formSchema = insertPolicySchema.extend({
  content: z.string().min(10, "Content must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface AdminPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  policyToEdit?: Policy | null;
}

export function AdminPolicyDialog({ open, onOpenChange, policyToEdit }: AdminPolicyDialogProps) {
  const { toast } = useToast();
  const createPolicy = useCreatePolicy();
  const updatePolicy = useUpdatePolicy();
  
  const isEditing = !!policyToEdit;

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      isPublished: true,
    },
  });

  // Reset form when dialog opens/closes or edit target changes
  useEffect(() => {
    if (open) {
      if (policyToEdit) {
        setValue("title", policyToEdit.title);
        setValue("slug", policyToEdit.slug);
        setValue("content", policyToEdit.content);
        setValue("isPublished", policyToEdit.isPublished ?? true);
      } else {
        reset({
          title: "",
          slug: "",
          content: "",
          isPublished: true,
        });
      }
    }
  }, [open, policyToEdit, setValue, reset]);

  const onSubmit = async (data: FormValues) => {
    try {
      if (isEditing && policyToEdit) {
        await updatePolicy.mutateAsync({ id: policyToEdit.id, ...data });
        toast({ title: "Success", description: "Policy updated successfully." });
      } else {
        await createPolicy.mutateAsync(data);
        toast({ title: "Success", description: "New policy created successfully." });
      }
      onOpenChange(false);
    } catch (error: any) {
      toast({ 
        title: "Error", 
        description: error.message || "Something went wrong.",
        variant: "destructive" 
      });
    }
  };

  const isPending = createPolicy.isPending || updatePolicy.isPending;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            {isEditing ? "Edit Policy" : "Create New Policy"}
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Make changes to the existing policy document below." 
              : "Draft a new legal policy. Markdown is supported."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                placeholder="e.g. Terms of Service" 
                {...register("title")} 
                className={errors.title ? "border-destructive" : ""}
              />
              {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input 
                id="slug" 
                placeholder="e.g. terms-of-service" 
                {...register("slug")} 
                className={errors.slug ? "border-destructive" : ""}
              />
              {errors.slug && <p className="text-xs text-destructive">{errors.slug.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content (Markdown)</Label>
            <div className="relative">
              <Textarea 
                id="content" 
                placeholder="# Introduction..." 
                className={`min-h-[300px] font-mono text-sm ${errors.content ? "border-destructive" : ""}`}
                {...register("content")} 
              />
              <div className="absolute bottom-2 right-2 text-xs text-muted-foreground pointer-events-none bg-background/80 px-1 rounded">
                Markdown supported
              </div>
            </div>
            {errors.content && <p className="text-xs text-destructive">{errors.content.message}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isPublished"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              {...register("isPublished")}
            />
            <Label htmlFor="isPublished" className="cursor-pointer">Publish immediately</Label>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEditing ? "Save Changes" : "Create Policy"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
