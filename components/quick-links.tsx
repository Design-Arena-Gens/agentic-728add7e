const links = [
  { label: 'Share a fun fact', hint: 'Kickstart a chat with something surprising.' },
  { label: 'Ask about weekends', hint: 'Casual and open-ended for quick banter.' },
  { label: 'Plan a coffee', hint: 'Turn hello into quality face time.' }
];

export default function QuickLinks() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Quick ideas</h3>
      <ul className="flex flex-col gap-3 text-sm text-foreground/80">
        {links.map((link) => (
          <li key={link.label} className="rounded-2xl border border-foreground/10 bg-background/60 p-4">
            <p className="font-medium">{link.label}</p>
            <p className="text-foreground/60">{link.hint}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
