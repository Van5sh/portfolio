const Footer = () => {
  const Items = [
    { label: "Github", href: "#" },
    { label: "Linkedin", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <footer className="w-full mt-16 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--theme-ink-soft)]">
        <p>
          © {new Date().getFullYear()} Vansh Dhir
        </p>
        <nav className="flex items-center gap-6">
          {Items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative transition text-[var(--theme-ink-soft)] hover:text-[var(--theme-accent)]"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[var(--theme-accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;