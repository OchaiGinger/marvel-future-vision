import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Vision", href: "#slide-1" },
  { label: "Services", href: "#slide-2" },
  { label: "Innovation", href: "#slide-3" },
  { label: "Lab", href: "#slide-4" },
  { label: "Portfolio", href: "#slide-5" },
  { label: "Leadership", href: "#slide-6" },
  { label: "Team", href: "#slide-7" },
  { label: "Global", href: "#slide-8" },
  { label: "Roadmap", href: "#slide-9" },
  { label: "Partners", href: "#slide-10" },
  { label: "Contact", href: "#slide-11" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#slide-0" className="font-extrabold tracking-tight text-lg md:text-xl">
          <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            MARVEL
          </span>{" "}
          Architecture
        </a>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={link.href}
                      className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a href="#slide-11" aria-label="Start your transformation">
            <Button variant="premium" size="sm">Start</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
