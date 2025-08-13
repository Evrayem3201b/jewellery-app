import type { Metadata } from "next";
import "./globals.css";
import { FloatingNavbar } from "@/components/floating-navbar";

export const metadata: Metadata = {
  title: "Vector — Fine Jewelry",
  description:
    "Vector crafts timeless, handcrafted fine jewelry with premium materials and master artisanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FloatingNavbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
