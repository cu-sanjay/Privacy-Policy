import { useState } from "react";
import { usePolicies, useDeletePolicy } from "@/hooks/use-policies";
import { format } from "date-fns";
import { 
  Plus, 
  Pencil, 
  Trash2, 
  MoreVertical, 
  Search, 
  FileText, 
  CheckCircle2, 
  XCircle,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AdminPolicyDialog } from "@/components/AdminPolicyDialog";
import { type Policy } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function Admin() {
  const { data: policies, isLoading } = usePolicies();
  const deletePolicy = useDeletePolicy();
  const { toast } = useToast();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState<Policy | null>(null);
  
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState<Policy | null>(null);

  const filteredPolicies = policies?.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const handleEdit = (policy: Policy) => {
    setEditingPolicy(policy);
    setIsDialogOpen(true);
  };

  const handleCreate = () => {
    setEditingPolicy(null);
    setIsDialogOpen(true);
  };

  const confirmDelete = (policy: Policy) => {
    setPolicyToDelete(policy);
    setDeleteConfirmOpen(true);
  };

  const handleDelete = async () => {
    if (!policyToDelete) return;
    
    try {
      await deletePolicy.mutateAsync(policyToDelete.id);
      toast({ title: "Deleted", description: "Policy has been removed." });
      setDeleteConfirmOpen(false);
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete policy.", variant: "destructive" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground">Policy Management</h1>
          <p className="text-muted-foreground mt-1">Create, edit, and manage legal documents.</p>
        </div>
        <Button onClick={handleCreate} className="shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> New Policy
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border bg-secondary/10 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search policies..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background"
            />
          </div>
          <div className="text-xs text-muted-foreground ml-auto">
            {filteredPolicies.length} documents found
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-secondary/20 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
          <div className="col-span-5 md:col-span-4">Title</div>
          <div className="col-span-3 hidden md:block">Slug</div>
          <div className="col-span-2 hidden md:block">Last Updated</div>
          <div className="col-span-3 md:col-span-2 text-center">Status</div>
          <div className="col-span-4 md:col-span-1 text-right">Actions</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border">
          {isLoading ? (
            <div className="p-12 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary/40" />
            </div>
          ) : filteredPolicies.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              No policies found matching your search.
            </div>
          ) : (
            <AnimatePresence>
              {filteredPolicies.map((policy) => (
                <motion.div
                  key={policy.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-secondary/10 transition-colors group"
                >
                  <div className="col-span-5 md:col-span-4 font-medium flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded text-primary">
                      <FileText size={16} />
                    </div>
                    <span className="truncate">{policy.title}</span>
                  </div>
                  
                  <div className="col-span-3 hidden md:block text-sm text-muted-foreground truncate font-mono bg-secondary/50 px-2 py-0.5 rounded w-fit">
                    /{policy.slug}
                  </div>
                  
                  <div className="col-span-2 hidden md:block text-sm text-muted-foreground">
                    {policy.lastUpdated ? format(new Date(policy.lastUpdated), 'MMM d, yyyy') : '-'}
                  </div>
                  
                  <div className="col-span-3 md:col-span-2 flex justify-center">
                    {policy.isPublished ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        <CheckCircle2 size={12} /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                        <XCircle size={12} /> Draft
                      </span>
                    )}
                  </div>
                  
                  <div className="col-span-4 md:col-span-1 text-right flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(policy)}>
                          <Pencil className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => confirmDelete(policy)} 
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>

      <AdminPolicyDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        policyToEdit={editingPolicy}
      />

      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the 
              <span className="font-semibold text-foreground"> {policyToDelete?.title} </span>
              policy and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Delete Policy
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
