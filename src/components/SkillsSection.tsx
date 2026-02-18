import { Code2, Server, Database, GitBranch, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(120_100%_50%/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(120_100%_50%/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(120_100%_50%/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 justify-center mb-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Wrench className="text-primary" size={16} />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wider">
              MY SKILLS
            </h2>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-primary/40 transition-all duration-500"
            >
              <div className="h-1.5 bg-gradient-to-r from-primary/40 to-primary/80 group-hover:from-primary group-hover:to-primary group-hover:h-2 transition-all duration-300" />

              <div className="p-6">
                <div className="relative w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:glow-green-strong transition-all duration-300">
                  <cat.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={26} />
                </div>

                <h3 className="font-display text-sm font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 tracking-wider">
                  {cat.title.toUpperCase()}
                </h3>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 group/item">
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:glow-green group-hover/item:scale-125 transition-all duration-200" />
                      <span className="text-muted-foreground text-sm font-semibold group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all duration-200">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
