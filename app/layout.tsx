import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const jet_mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShortNet – Lightning-Fast URL Shortener for Clean, Trackable Links",
  description:
    "ShortNet is a modern URL shortener that transforms long, messy URLs into sleek, shareable links. Track clicks, manage link analytics, and keep your links neat — all in one fast, privacy-friendly platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jet_mono.className} antialiased overflow-x-hidden overflow-y-auto scroll-smooth`}
      >
        <div className="pattern-bg w-screen min-h-screen" />
        <div className="w-screen min-h-screen bg-black/70 backdrop-blur-xs">
          <div className="relative md:max-w-2xl lg:max-w-[1260px] mx-auto">
            {children}
            <Toaster
              theme="dark"
              duration={3000}
              className={`font-jet`}
              position="bottom-left"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
