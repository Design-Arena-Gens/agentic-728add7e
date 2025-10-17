'use client';

import { useMemo, useState } from 'react';

const vibes = ['Cheerful', 'Chill', 'Motivated'] as const;
type Vibe = (typeof vibes)[number];

const templates: Record<Vibe, string> = {
  Cheerful: "Hey {name}! It's a perfect day to share a smile.",
  Chill: "Hi {name}, take a breath and enjoy the moment.",
  Motivated: "Hello {name}! You've got this—let's make moves."
};

export default function GreetingCard() {
  const [name, setName] = useState('friend');
  const [vibe, setVibe] = useState<Vibe>('Cheerful');

  const message = useMemo(() => {
    const template = templates[vibe];
    return template.replace('{name}', capitalize(name.trim()) || 'friend');
  }, [name, vibe]);

  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 backdrop-blur">
      <header>
        <h2 className="text-2xl font-semibold">Craft your greeting</h2>
        <p className="text-sm text-foreground/70">
          Personalize a quick hello to kick off your next conversation.
        </p>
      </header>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium text-foreground/80">Who are you greeting?</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type a name"
          className="rounded-xl border border-foreground/15 bg-foreground/5 px-4 py-3 text-base outline-none transition focus:border-foreground/40 focus:bg-background"
        />
      </label>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium text-foreground/80">Pick a vibe</legend>
        <div className="flex flex-wrap gap-2">
          {vibes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setVibe(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                option === vibe
                  ? 'bg-foreground text-background shadow-lg shadow-foreground/20'
                  : 'border border-foreground/20 bg-background/80 text-foreground/70 hover:bg-foreground/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <article className="rounded-2xl border border-foreground/10 bg-background/70 p-6 text-lg font-medium leading-relaxed shadow-inner">
        {message}
      </article>
    </section>
  );
}

function capitalize(input: string) {
  if (!input) {
    return '';
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}
