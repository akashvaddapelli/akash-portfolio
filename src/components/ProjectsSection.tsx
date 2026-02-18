import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Automated Bus Scheduling & Route Management System",
    description:
      "A comprehensive admin dashboard for managing bus routes, schedules, and real-time updates. Features an intuitive interface for route planning, driver assignment, and schedule optimization.",
    features: ["Admin Dashboard", "Route Management", "Real-time Schedule Updates"],
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
  },
  {
    title: "Volume Control Using Hand Gesture",
    description:
      "An innovative application that uses computer vision to detect hand gestures via webcam and maps them to system volume controls in real time.",
    features: ["Hand Detection", "Real-time Volume Control", "Webcam Integration"],
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "#",
  },
  {
    title: "Task Management System",
    description:
      "A full-stack task management application with user authentication, CRUD operations, task categorization, and real-time status tracking.",
    features: ["User Authentication", "Task CRUD Operations", "Real-time Status Tracking"],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "#",
  },
  {
    title: "ATSPro Analyzer",
    description:
      "An intelligent resume analyzer that parses resumes against job descriptions to provide ATS compatibility scores, keyword matching, and optimization suggestions.",
    features: ["Resume Parsing", "ATS Score Analysis", "Keyword Optimization"],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "JWT", "Multer", "pdf-parse"],
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 justify-center mb-12">
          <div className="h-px w-12 bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            My Projects
          </h2>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-foreground/20 bg-background"
            >
              <div className="h-1 bg-foreground group-hover:bg-primary transition-colors duration-300" />
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
                      className="text-xs font-medium px-3 py-1 rounded-full bg-foreground text-background"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button size="sm" className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> GitHub
                    </a>
                  </Button>
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
