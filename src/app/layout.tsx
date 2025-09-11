import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const monaSans = localFont({
  src: "../fonts/Mona-Sans.var.woff2",
  display: "swap",
  variable: "--font-mona-sans",
  weight: "200 900",
});

export const metadata: Metadata = {
  title: "Vayu - Your Weekend Planner for Memorable Adventures",
  description:
    "Vayu makes weekend planning as fast as wind. Create your perfect weekend schedule, and turn ordinary weekends into memorable adventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx("h-full antialiased", inter.variable, monaSans.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
