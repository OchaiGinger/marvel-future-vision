import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import marvelLogo from "@/assets/marvel-logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Lab & Innovation", href: "/lab-innovation" },
  { label: "Leadership & Team", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#slide-0" className="flex items-center gap-2 font-extrabold tracking-tight text-lg md:text-xl group">
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            <img 
              src={marvelLogo} 
              alt="Marvel Architecture Logo" 
              className="w-full h-full object-contain filter invert brightness-0 group-hover:brightness-100 group-hover:filter-none transition-all duration-300"
            />
          </div>
          <div className="hidden sm:block">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              MARVEL
            </span>{" "}
            Architecture
          </div>
          <div className="sm:hidden">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              MARVEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={link.href}
                      className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-accent/10"
                    >
                      {link.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="/contact" aria-label="Start your transformation">
            <Button variant="premium" size="sm">Start Project</Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img 
                      src={marvelLogo} 
                      alt="Marvel Architecture" 
                      className="w-8 h-8 filter invert brightness-0"
                    />
                    <span className="font-bold text-lg bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                      MARVEL
                    </span>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-muted-foreground hover:text-foreground transition-smooth py-2 border-b border-border/50 hover:border-primary/30"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-4">
                  <a href="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="premium" className="w-full">
                      Start Your Project
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
