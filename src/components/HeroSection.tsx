import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerProfile from "@/assets/developer-profile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Omnitrix-style radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 left-1/4 w-1 h-1 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(120_100%_50%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(120_100%_50%/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 mb-6 animate-fade-in glow-green" style={{ animationDelay: "0.1s" }}>
              <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs font-display">
                Full Stack Developer
              </p>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up tracking-wider" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <span className="text-foreground">AKASH </span>
              <span className="text-gradient">VADDAPELLI</span>
            </h1>
            <p className="max-w-2xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-up text-lg font-medium" style={{ animationDelay: "0.5s", opacity: 0 }}>
              I build scalable, performant web applications with clean code and modern technologies.
              Passionate about turning complex problems into elegant digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s", opacity: 0 }}>
              <Button variant="hero" size="lg" asChild className="glow-green-strong rounded-xl tracking-wider">
                <a href="#projects">
                  View Projects <ArrowDown className="ml-1" size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="rounded-xl tracking-wider border-primary/30 text-primary hover:bg-primary/10">
                <a href="/Akash-vaddapelli-resume.pdf" download="Akash-Vaddapelli-Resume.pdf">
                  Download Resume <Download className="ml-1" size={18} />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile with Omnitrix ring */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/40 glow-green-strong">
                <img
                  src={developerProfile}
                  alt="Akash Vaddapelli - Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite_reverse]" />
              {/* Omnitrix diamond accent */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-primary/80 glow-green-strong" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
