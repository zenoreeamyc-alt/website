import React from "react";

export function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-11 w-11 rounded-2xl border border-slate-200/70 dark:border-slate-600/40 bg-white/70 dark:bg-white/5 grid place-items-center shadow-sm">
      {children}
    </div>
  );
}

export function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
export function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 7h12l1 14H5L6 7Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
export function ToolsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="m14.7 6.3-1.4 1.4 3 3 1.4-1.4a2 2 0 0 0 0-2.8l-.2-.2a2 2 0 0 0-2.8 0Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 8 5 15v4h4l7-7" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
export function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 18 3 12l6-6" stroke="currentColor" strokeWidth="2"/>
      <path d="m15 6 6 6-6 6" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
export function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 21s-7-4.4-9.4-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.4 12C19 16.6 12 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
export function GroupIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
export function MegaphoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 11v2a3 3 0 0 0 3 3h2l5 4V4L8 8H6a3 3 0 0 0-3 3Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 8a4 4 0 0 1 0 8" stroke="currentColor" strokeWidth="2"/>
      <path d="M19 5a7 7 0 0 1 0 14" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
export function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="m13 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
export function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M21 12.8A8.5 8.5 0 0 1 11.2 3a7.5 7.5 0 1 0 9.8 9.8Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
