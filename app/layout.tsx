import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ChatWidget from "@/components/chat/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans bg-background text-text-primary antialiased`}
      >
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="relative z-10">{children}</div>
        <ChatWidget />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#F9F6F0",
              color: "#2D2926",
              border: "1px solid rgba(45, 41, 38, 0.1)",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}
