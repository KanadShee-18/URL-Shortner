import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jet_mono = JetBrains_Mono({
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
      <body className={`${jet_mono.className} antialiased`}>
        <div className="md:max-w-2xl lg:max-w-[1260px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
