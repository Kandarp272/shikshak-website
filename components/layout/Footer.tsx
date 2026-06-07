import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-3xl border-t border-glass-border pt-32 pb-16 relative overflow-hidden">
      {/* Background decoration to make glassmorphism pop at the end */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col mb-8">
              <span className="text-3xl font-bold font-serif text-text-primary leading-tight">
                शिक्षक सहायक
              </span>
              <span className="text-[10px] text-text-muted tracking-[0.2em] uppercase font-medium">
                Shikshak Sahayak
              </span>
            </Link>
            <p className="text-text-secondary text-lg max-w-sm mb-10 leading-relaxed font-sans">
              India's AI Classroom, Built for Bharat. Empowering teachers, engaging students, and informing parents with seamless AI integration.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors duration-500 cursor-default">
                <div className="p-2 rounded-full bg-primary/5">
                  <Mail size={20} />
                </div>
                <span className="font-medium">shikshaksahayak.in@gmail.com</span>
              </div>
              <a
                href="https://wa.me/917990680690"
                className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors duration-500 group"
                aria-label="Contact on WhatsApp"
              >
                <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <MessageCircle size={20} />
                </div>
                <span className="font-medium">WhatsApp Us</span>
              </a>
              <div className="flex items-center gap-4 text-text-secondary cursor-default">
                <div className="p-2 rounded-full bg-primary/5">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-serif text-xl font-bold mb-8">Explore</h4>
            <ul className="space-y-5">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-primary transition-all duration-500 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary transition-all duration-500 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-text-secondary hover:text-primary transition-all duration-500 hover:translate-x-1 inline-block">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-secondary hover:text-primary transition-all duration-500 hover:translate-x-1 inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-text-primary font-serif text-xl font-bold mb-8">Legal</h4>
            <ul className="space-y-5">
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-primary transition-all duration-500 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-primary transition-all duration-500 hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-glass-border pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-sm font-medium">
            © 2026 Shikshak Sahayak. Alpha build.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-muted text-sm font-medium">Built for Bharat</span>
            <span className="text-lg">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
