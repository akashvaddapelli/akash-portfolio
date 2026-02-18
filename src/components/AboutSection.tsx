import { User, Sparkles, Target, Zap } from "lucide-react";

const highlights = [
  { icon: Sparkles, label: "Creative Thinker", desc: "Turning ideas into elegant solutions" },
  { icon: Target, label: "Detail Oriented", desc: "Pixel-perfect, quality-driven code" },
  { icon: Zap, label: "Fast Learner", desc: "Adapting quickly to new technologies" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-primary/3 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 justify-center mb-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="text-primary" size={16} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              About Me
            </h2>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main content card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-background border border-border rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/30">
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  I'm a passionate Full Stack Developer with a strong focus on building
                  scalable, high-performance web applications. I specialize in the modern
                  JavaScript ecosystem — from crafting pixel-perfect UIs with{" "}
                  <span className="text-foreground font-semibold bg-primary/5 px-1.5 py-0.5 rounded">React</span> to architecting
                  robust backends with{" "}
                  <span className="text-foreground font-semibold bg-primary/5 px-1.5 py-0.5 rounded">Node.js</span> and{" "}
                  <span className="text-foreground font-semibold bg-primary/5 px-1.5 py-0.5 rounded">PostgreSQL</span>.
                </p>
                <p>
                  I thrive on solving complex problems and transforming ideas into elegant,
                  user-centric digital products. Whether it's optimizing database queries,
                  designing RESTful APIs, or implementing responsive interfaces, I bring a
                  detail-oriented, problem-solving mindset to every project.
                </p>
                <p>
                  I'm always eager to learn new technologies and contribute to meaningful
                  projects that make a difference.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="group/card relative bg-background border border-border rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover/card:bg-primary group-hover/card:shadow-lg group-hover/card:shadow-primary/25 transition-all duration-300">
                  <item.icon className="text-primary group-hover/card:text-primary-foreground transition-colors duration-300" size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
