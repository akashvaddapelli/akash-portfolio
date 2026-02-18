import { Github, ExternalLink, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Automated Bus Scheduling & Route Management System",
    description:
      "A comprehensive admin dashboard for managing bus routes, schedules, and real-time updates. Features an intuitive interface for route planning, driver assignment, and schedule optimization.",
    features: ["Admin Dashboard", "Route Management", "Real-time Schedule Updates"],
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Volume Control Using Hand Gesture",
    description:
      "An innovative application that uses computer vision to detect hand gestures via webcam and maps them to system volume controls in real time.",
    features: ["Hand Detection", "Real-time Volume Control", "Webcam Integration"],
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "#",
    accent: "from-violet-500 to-purple-500",
  },
  {
    title: "Task Management System",
    description:
      "A full-stack task management application with user authentication, CRUD operations, task categorization, and real-time status tracking.",
    features: ["User Authentication", "Task CRUD Operations", "Real-time Status Tracking"],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "#",
    accent: "from-emerald-500 to-green-500",
  },
  {
    title: "ATSPro Analyzer",
    description:
      "An intelligent resume analyzer that parses resumes against job descriptions to provide ATS compatibility scores, keyword matching, and optimization suggestions.",
    features: ["Resume Parsing", "ATS Score Analysis", "Keyword Optimization"],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "JWT", "Multer", "pdf-parse"],
    github: "#",
    accent: "from-orange-500 to-amber-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 justify-center mb-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <FolderKanban className="text-primary" size={16} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              My Projects
            </h2>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.accent} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 hover:border-primary/30">
                {/* Accent bar */}
                <div className={`h-1 bg-gradient-to-r ${project.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="p-7 space-y-4">
                  {/* Project number */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-mono text-muted-foreground/50 group-hover:text-primary/50 transition-colors">
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 pt-1">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2.5 group/feat">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/feat:bg-primary group-hover/feat:scale-150 transition-all duration-200" />
                        <span className="group-hover/feat:text-foreground group-hover/feat:translate-x-0.5 transition-all duration-200">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/5 text-primary/80 border border-primary/10 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-4 flex gap-3">
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 rounded-xl"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
