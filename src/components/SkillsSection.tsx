import { Code2, Server, Database, GitBranch, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderHover: "hover:border-blue-400/50",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"],
    color: "from-emerald-500/20 to-green-500/20",
    borderHover: "hover:border-emerald-400/50",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL"],
    color: "from-violet-500/20 to-purple-500/20",
    borderHover: "hover:border-violet-400/50",
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
    color: "from-orange-500/20 to-amber-500/20",
    borderHover: "hover:border-orange-400/50",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 justify-center mb-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wrench className="text-primary" size={16} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              My Skills
            </h2>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group relative bg-background border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 ${cat.borderHover}`}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${cat.color} group-hover:h-2 transition-all duration-300`} />

              <div className="p-6">
                {/* Icon with animated background */}
                <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <cat.icon className="text-primary" size={26} />
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
                </div>

                <h3 className="font-display text-lg font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </h3>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill, si) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 group/item"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-200" />
                      <span className="text-muted-foreground text-sm font-medium group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all duration-200">
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
