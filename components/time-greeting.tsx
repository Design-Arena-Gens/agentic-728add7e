'use client';

import { useEffect, useMemo, useState } from 'react';

export default function TimeGreeting() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const greeting = useMemo(() => {
    const hour = now.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }, [now]);

  const formatted = useMemo(
    () =>
      now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
    [now]
  );

  return (
    <div className="rounded-2xl border border-foreground/10 bg-background/60 p-4">
      <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">Right now</p>
      <p className="text-2xl font-semibold">{formatted}</p>
      <p className="text-sm text-foreground/70">{greeting}! Say hi to someone special.</p>
    </div>
  );
}
