import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerProfile from "@/assets/developer-profile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6 animate-fade-in shadow-sm" style={{ animationDelay: "0.1s" }}>
              <p className="text-primary font-medium tracking-widest uppercase text-xs">
                Full Stack Developer
              </p>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <span className="text-foreground">Akash </span>
              <span className="text-gradient">Vaddapelli</span>
            </h1>
            <p className="max-w-2xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-up text-lg" style={{ animationDelay: "0.5s", opacity: 0 }}>
              I build scalable, performant web applications with clean code and modern technologies.
              Passionate about turning complex problems into elegant digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s", opacity: 0 }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects <ArrowDown className="ml-1" size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/Akash-vaddapelli-resume.pdf" download="Akash-Vaddapelli-Resume.pdf">
                  Download Resume <Download className="ml-1" size={18} />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src={developerProfile}
                  alt="Akash Vaddapelli - Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse" />
              <div className="absolute -inset-8 rounded-full border border-primary/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
