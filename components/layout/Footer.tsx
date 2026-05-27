import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-glass-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold font-syne text-text-primary leading-none">
                शिक्षक सहायक
              </span>
              <span className="text-xs text-text-muted tracking-widest uppercase font-medium">
                Shikshak Sahayak
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm mb-8">
              India's AI Classroom, Built for Bharat. Empowering teachers, engaging students, and informing parents with seamless AI integration.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors cursor-default">
                <Mail size={18} />
                <span>shikshaksahayak.in@gmail.com</span>
              </div>
              <a
                href="https://wa.me/917990680690"
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
              >
                <MessageCircle size={18} />
                <span>+91 7990680690 (WhatsApp)</span>
              </a>
              <div className="flex items-center gap-3 text-text-secondary cursor-default">
                <MapPin size={18} />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-syne font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-text-secondary hover:text-primary transition-colors">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-text-primary font-syne font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © 2026 Shikshak Sahayak. Alpha build.
          </p>
          <p className="text-text-muted text-sm">
            Built for Bharat 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
