import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(25_100%_50%_/_0.15),_transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Hello, I'm
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <span className="text-foreground">Akash </span>
          <span className="text-gradient">Vaddapelli</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-display animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Full Stack Developer | React | Node.js | PostgreSQL
        </p>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          I build scalable, performant web applications with clean code and modern technologies.
          Passionate about turning complex problems into elegant digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">
              View Projects <ArrowDown className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="/resume.pdf" download>
              Download Resume <Download className="ml-1" size={18} />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
