import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SynthFlow — AI Video Production & Portfolio",
  description:
    "SynthFlow helps brands scale premium AI videos—ads, explainers, onboarding, and training—with human-level storytelling, fast delivery, and multilingual support.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
