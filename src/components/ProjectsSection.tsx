import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Automated Bus Scheduling & Route Management System",
    description:
      "A comprehensive admin dashboard for managing bus routes, schedules, and real-time updates. Features an intuitive interface for route planning, driver assignment, and schedule optimization.",
    features: ["Admin Dashboard", "Route Management", "Real-time Schedule Updates"],
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Volume Control Using Hand Gesture",
    description:
      "An innovative application that uses computer vision to detect hand gestures via webcam and maps them to system volume controls in real time.",
    features: ["Hand Detection", "Real-time Volume Control", "Webcam Integration"],
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "#",
    demo: null,
  },
  {
    title: "Task Management System",
    description:
      "A full-stack task management application with user authentication, CRUD operations, task categorization, and real-time status tracking.",
    features: ["User Authentication", "Task CRUD Operations", "Real-time Status Tracking"],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "ATSPro Analyzer",
    description:
      "An intelligent resume analyzer that parses resumes against job descriptions to provide ATS compatibility scores, keyword matching, and optimization suggestions.",
    features: ["Resume Parsing", "ATS Score Analysis", "Keyword Optimization"],
    tech: ["Python", "React", "Node.js"],
    github: "#",
    demo: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="h-2 bg-primary/80 group-hover:bg-primary transition-colors" />
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="hero-outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </Button>
                  )}
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
