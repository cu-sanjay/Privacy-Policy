import { Link, useLocation } from "wouter";
import { Scale, ShieldCheck, UserCog } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/10 selection:text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground group-hover:bg-primary/90 transition-colors">
              <Scale size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-tight">LegalHost</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Privacy & Compliance</span>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/">
              <span className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                location === "/" || location.startsWith("/policy") ? "text-primary font-semibold" : "text-muted-foreground"
              )}>
                Policies
              </span>
            </Link>
            <Link href="/admin">
              <span className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer flex items-center gap-1.5",
                location === "/admin" ? "text-primary font-semibold" : "text-muted-foreground"
              )}>
                <UserCog size={16} />
                Admin
              </span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} />
            <span>© 2026 Privacy & Policy Host. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
