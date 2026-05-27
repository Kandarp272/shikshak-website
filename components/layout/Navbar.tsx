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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-glass-border py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-bold font-syne text-text-primary leading-none group-hover:text-primary transition-colors">
            शिक्षक सहायक
          </span>
          <span className="text-[10px] md:text-xs text-text-muted tracking-widest uppercase font-medium">
            Shikshak Sahayak
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/waitlist">
            <Button variant="primary" size="sm" glow>
              Join Waitlist
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[70px] z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300 origin-top",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pb-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-syne font-bold text-text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/waitlist" className="w-full" onClick={() => setIsOpen(false)}>
            <Button variant="primary" size="lg" className="w-full" glow>
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
