import { usePolicies } from "@/hooks/use-policies";
import { Link } from "wouter";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Loader2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: policies, isLoading, isError } = usePolicies();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="h-10 w-10 animate-spin text-primary/50" />
        <p className="mt-4 text-muted-foreground font-medium animate-pulse">Loading documents...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-md mx-auto">
        <div className="bg-destructive/10 p-4 rounded-full mb-4">
          <FileText className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-foreground">Unable to load policies</h2>
        <p className="mt-2 text-muted-foreground">
          We encountered a problem fetching the available documents. Please try again later.
        </p>
        <Button onClick={() => window.location.reload()} className="mt-6" variant="outline">
          Retry Connection
        </Button>
      </div>
    );
  }

  const publishedPolicies = policies?.filter(p => p.isPublished) || [];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
          <BookOpen size={12} />
          Legal Resources
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground tracking-tight">
          Transparency & Trust
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Access our latest legal documents, terms of service, and privacy guidelines. 
          Clear, concise, and always up to date.
        </p>
      </motion.div>

      {/* Policy Grid */}
      {publishedPolicies.length === 0 ? (
        <div className="text-center py-12 bg-secondary/30 rounded-2xl border border-dashed border-border">
          <p className="text-muted-foreground">No published policies found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publishedPolicies.map((policy, index) => (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/${policy.slug}`}>
                <div className="group h-full bg-card rounded-xl border border-border/60 p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                  
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-4">
                        <FileText size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {policy.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">
                        {policy.content.replace(/[#*`]/g, '').slice(0, 150)}...
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground font-medium">
                        Last updated {policy.lastUpdated ? format(new Date(policy.lastUpdated), 'MMM d, yyyy') : 'Recently'}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Read Policy <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
