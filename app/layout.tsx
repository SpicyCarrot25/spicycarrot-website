import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spicy Carrot — AI for Hospitality",
  description: "We digitize independent restaurants, cafés, and boutique hotels — completely. Marketing, operations, and finance so the owner never has to touch a computer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-sm border-b border-[#1A1A1A]/8">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-display text-xl font-semibold text-[#1A1A1A] tracking-tight">
              Spicy Carrot
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">Services</Link>
              <Link href="/case-study" className="text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">Case Study</Link>
              <Link href="/about" className="text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">About</Link>
              <Link href="/audit" className="text-sm bg-[#E8654A] text-white px-4 py-2 rounded-full hover:bg-[#d4583e] transition-colors">
                Free Audit →
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-[#1A1A1A] text-white/60 py-12 mt-24">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p className="font-display text-white text-lg mb-2">Spicy Carrot</p>
              <p className="text-sm">Less admin. More laughing.</p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/audit" className="hover:text-white transition-colors">Free Audit</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="text-sm">
              <a href="mailto:hello@spicycarrot.xyz" className="hover:text-white transition-colors">hello@spicycarrot.xyz</a>
              <p className="mt-1">© 2026 Spicy Carrot</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
