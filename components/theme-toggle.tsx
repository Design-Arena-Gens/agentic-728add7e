'use client';

import { useMemo } from 'react';
import { useTheme } from './theme-provider';

const ICONS = {
  light: '☀️',
  dark: '🌙'
} as const;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = useMemo(() => (theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'), [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-foreground/20"
    >
      <span role="img" aria-hidden>
        {ICONS[theme]}
      </span>
      <span>{label}</span>
    </button>
  );
}
