import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-shell">
      <div className="mx-auto w-full max-w-[520px] px-4 pb-20 pt-6">
        {children}
      </div>
      <ThemeToggle />
    </div>
  );
}
