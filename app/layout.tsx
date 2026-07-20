import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NGOSystems — Advancing Global NGO Impact",
  description:
    "We bridge the gap between world-class software engineering and boots-on-the-ground social change. Professional management systems designed for organizations that change the world.",
  keywords: "NGO management, nonprofit software, impact analytics, CRM for NGOs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
