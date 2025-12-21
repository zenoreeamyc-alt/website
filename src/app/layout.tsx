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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;var prefers=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var dark=(t? t==='dark':prefers);if(dark){d.classList.add('dark');}}catch(e){}})();`
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
