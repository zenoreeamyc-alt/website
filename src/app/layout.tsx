import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.subtitle
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
