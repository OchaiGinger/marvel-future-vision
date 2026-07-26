import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import marvelLogo from "@/assets/marvel-logo.png";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Lab & Innovation", href: "/lab-innovation" },
  { label: "Leadership & Team", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold tracking-tight text-lg md:text-xl group"
        >
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.href}
                      className={`px-3 py-2 text-sm transition-smooth rounded-md ${
                        location.pathname === link.href
                          ? 'text-primary font-semibold border-b-2 border-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" aria-label="Start your transformation">
            <Button variant="premium" size="sm">Start Project</Button>
          </Link>
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
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-smooth py-2 border-b ${
                      location.pathname === link.href
                        ? 'text-foreground font-semibold border-primary/50'
                        : 'text-muted-foreground hover:text-foreground border-border/50 hover:border-primary/30'
                    }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-4">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="premium" className="w-full">
                      Start Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
