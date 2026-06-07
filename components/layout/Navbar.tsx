"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b border-transparent",
        scrolled ? "bg-background/40 backdrop-blur-xl border-glass-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="text-2xl md:text-3xl font-serif font-bold text-text-primary leading-tight group-hover:text-primary transition-colors duration-500">
            शिक्षक सहायक
          </span>
          <span className="text-[9px] md:text-[10px] text-text-muted tracking-[0.2em] uppercase font-medium">
            Shikshak Sahayak
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10" role="navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-500 hover:text-primary relative group",
                  isActive ? "text-primary" : "text-text-secondary"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full",
                  isActive && "w-full"
                )} />
              </Link>
            );
          })}

          <Link href="/waitlist">
            <Button 
              variant="primary" 
              size="sm"
              className="shadow-lg shadow-primary/15"
            >
              Join Waitlist
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[70px] z-40 bg-background/60 backdrop-blur-2xl md:hidden transition-all duration-700 origin-top",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6 pb-20" role="navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-3xl font-serif font-bold transition-colors duration-500",
                  isActive ? "text-primary" : "text-text-primary hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/waitlist" className="w-full" onClick={() => setIsOpen(false)}>
            <Button variant="primary" size="lg" className="w-full shadow-2xl shadow-primary/20">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
