import { usePolicy } from "@/hooks/use-policies";
import { useRoute } from "wouter";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Loader2, Calendar, Printer, Share2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function PolicyViewer() {
  const [match, params] = useRoute("/:slug");
  const slug = params?.slug || "";
  const { data: policy, isLoading, isError } = usePolicy(slug);
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ description: "Link copied to clipboard" });
  };

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary/50" />
      </div>
    );
  }

  if (isError || !policy) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-3xl font-serif font-bold mb-4">Policy Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The document you are looking for ("{slug}") does not exist or has been removed.
        </p>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto bg-card md:shadow-xl md:shadow-black/5 md:border md:border-border/50 md:rounded-2xl overflow-hidden">
      {/* Document Header */}
      <div className="bg-secondary/30 border-b border-border px-6 py-8 md:px-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-wrap gap-4 items-center justify-between mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full border border-border/50">
              <Calendar size={14} />
              <span>Effective: {policy.lastUpdated ? format(new Date(policy.lastUpdated), 'MMMM d, yyyy') : 'Unknown'}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleShare} title="Share">
                <Share2 size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handlePrint} title="Print">
                <Printer size={16} />
              </Button>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
            {policy.title}
          </h1>
        </motion.div>
      </div>

      {/* Document Content */}
      <motion.div 
        className="px-6 py-8 md:px-10 md:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="prose-custom max-w-none">
          <ReactMarkdown>
            {policy.content}
          </ReactMarkdown>
        </div>

        {/* Footer of the document */}
        <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground italic">
          <p>This document was last updated on {policy.lastUpdated ? format(new Date(policy.lastUpdated), 'MMMM d, yyyy') : 'N/A'}. continued use of our services constitutes acceptance of these terms.</p>
        </div>
      </motion.div>
    </article>
  );
}
