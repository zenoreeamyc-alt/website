'use client';

import { useEffect, useState } from 'react';

function setTheme(theme: 'light' | 'dark') {
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
  try {
    localStorage.setItem('theme', theme);
  } catch {}
}

export function ThemeToggle() {
  const [theme, setThemeState] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    try {
      const t = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (t === 'light' || t === 'dark') setThemeState(t);
      else setThemeState(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    } catch {
      setThemeState(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setThemeState(next);
        setTheme(next);
      }}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-medium text-black shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21 14.5A8 8 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
