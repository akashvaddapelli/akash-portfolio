import { Code2, Server, Database, GitBranch } from "lucide-react";

const skillCategories = [
  { title: "Frontend", icon: Code2, skills: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js"] },
  { title: "Database", icon: Database, skills: ["PostgreSQL"] },
  { title: "Tools", icon: GitBranch, skills: ["Git", "GitHub"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 justify-center mb-12">
          <div className="h-px w-12 bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            My Skills
          </h2>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-background border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
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
