import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/10 glow-green"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="group relative flex items-center gap-1">
          <span className="font-display text-xl font-black text-foreground tracking-widest">
            AKASH
          </span>
          <span className="font-display text-xl font-black text-primary">.</span>
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full glow-green" />
        </a>

        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 bg-card/80 rounded-full px-2 py-1.5 border border-border/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground glow-green"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {link.label.toUpperCase()}
                </a>
              );
            })}
          </div>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold tracking-widest glow-green-strong hover:scale-105 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground/75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
          </span>
          HIRE ME
        </a>

        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10 animate-fade-in">
          <ul className="flex flex-col items-center gap-2 py-6 px-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    className={`block w-full text-center py-3 rounded-xl text-sm font-display font-bold tracking-wider transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground glow-green"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label.toUpperCase()}
                  </a>
                </li>
              );
            })}
            <li className="w-full pt-2">
              <a
                href="#contact"
                className="block w-full text-center py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold tracking-widest glow-green-strong"
                onClick={() => setIsOpen(false)}
              >
                HIRE ME
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
