import ThemeToggle from "../components/theme-toggle";
import GreetingCard from "../components/greeting-card";
import QuickLinks from "../components/quick-links";
import TimeGreeting from "../components/time-greeting";

const highlights = [
  {
    title: "Instant Hello",
    description: "Share a high-energy greeting tailored to any name in seconds."
  },
  {
    title: "Conversation Starters",
    description: "Jump into chats with a curated list of upbeat questions."
  },
  {
    title: "Mood-Aware Themes",
    description: "Flip between light and dark to match the vibe."
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-12 px-6 py-16">
      <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/70">Welcome</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Hi there! Let&apos;s make today brighter.</h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:gap-12">
        <GreetingCard />
        <aside className="flex flex-col gap-6 rounded-3xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur">
          <TimeGreeting />
          <QuickLinks />
        </aside>
      </section>

      <section className="grid gap-6 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 backdrop-blur sm:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm leading-relaxed text-foreground/80">{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
