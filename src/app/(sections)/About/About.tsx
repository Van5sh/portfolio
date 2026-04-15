"use client";

export default function AboutPage() {
  return (
    <div className="w-full px-6 max-w-[1200px] mx-auto">
      <div className="mb-10">
        <h1 className="hero-title">Vansh Dhir.</h1>
        <div className="w-16 h-[3px] bg-[var(--theme-accent)]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 mb-8">
        <div className="glass-panel p-8 flex flex-col justify-between h-full shadow-[0_0_40px_rgba(0,240,255,0.06)]">
          
          <div>
            <h2 className="text-2xl font-semibold text-[var(--theme-ink)] mb-5 leading-snug">
              Architecting solutions in the digital void.
            </h2>

            <p className="text-[15px] text-[var(--theme-ink-soft)] leading-relaxed max-w-[55ch]">
              Full-Stack Engineer with a precision-focused approach to building scalable digital
              infrastructure. Currently pushing the boundaries of Computer Science at VIT Vellore,
              translating complex logic into seamless user experiences. I specialize in building
              seamless bridges between backend systems and high-performance frontends.
            </p>
          </div>

          <div className="flex gap-6 mt-10 text-xs text-[var(--theme-ink-soft)]">
            <span> Vellore, IN</span>
          </div>
        </div>
        <div className="glass-panel p-6 flex flex-col justify-between h-full opacity-90 hover:opacity-100 transition">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="mt-[6px] w-2 h-2 rounded-full bg-[var(--theme-accent)] shrink-0" />
              <div>
                <p className="font-semibold text-sm text-[var(--theme-ink)]">
                  B.Tech in CSE
                </p>
                <p className="text-xs text-[var(--theme-ink-soft)]">
                  VIT Vellore • 2023 – 2027
                </p>
                <span className="tag-pill mt-2 inline-block text-xs px-3 py-1">
                  CGPA 8.38
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-[6px] w-2 h-2 rounded-full border border-[var(--theme-ink-soft)] shrink-0" />
              <div>
                <p className="font-semibold text-sm text-[var(--theme-ink)]">
                  CBSE Class XII
                </p>
                <p className="text-xs text-[var(--theme-ink-soft)]">
                  DPS Sushant Lok • 2023
                </p>
                <p className="text-xs text-[var(--theme-ink-soft)] mt-1">
                  Score: 87.4%
                </p>
              </div>
            </div>

          </div>
          <div className="flex justify-between mt-8 text-[10px] text-[var(--theme-ink-soft)] uppercase tracking-widest">
            <span>Active</span>
            <span className="text-[var(--theme-accent)]">●</span>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {[
          {
            title: "Languages",
            items: ["C / C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
            icon: "⚡",
          },
          {
            title: "Frameworks",
            items: ["React", "Next.js", "Node.js", "Express", "Tailwind"],
            icon: "◈",
          },
          {
            title: "Databases",
            items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
            icon: "🗄",
          },
          {
            title: "Tools",
            items: ["Docker", "Git", "AWS", "Linux"],
            icon: "✦",
          },
        ].map((group) => (
          <div
            key={group.title}
            className="glass-panel p-5 h-full transition hover:border-[var(--theme-accent)]"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[var(--theme-accent)] text-base">
                {group.icon}
              </span>
              <p className="text-xs tracking-widest uppercase text-[var(--theme-ink-soft)]">
                {group.title}
              </p>
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-[var(--theme-ink-soft)]">
              {group.items.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}