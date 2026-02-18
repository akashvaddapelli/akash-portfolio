import { Code2, Server, Database, GitBranch } from "lucide-react";

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
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
