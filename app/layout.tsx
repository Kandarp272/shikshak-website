import type { Metadata } from "next";
import { DM_Sans, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import MeshBackground from "@/components/layout/MeshBackground";
import ChatWidget from "@/components/chat/ChatWidget";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shikshak Sahayak — India's AI Classroom, Built for Bharat",
  description:
    "AI-powered attendance, content generation, mood detection, and live monitoring for Indian schools. Currently in Alpha.",
  keywords:
    "AI classroom India, smart school Gujarat, EdTech Ahmedabad, AI attendance, CBSE AI tools",
  openGraph: {
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  metadataBase: new URL("https://shikshaksahayak.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans bg-background text-text-primary antialiased`}
      >
        <MeshBackground />
        <div className="relative z-10">{children}</div>
        <ChatWidget />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0D1117",
              color: "#F1F5F9",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}
