import { Download, FileText, CheckCircle2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Akash-vaddapelli-resume.pdf";
    link.download = "Akash-Vaddapelli-Resume.pdf";
    link.type = "application/pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeHighlights = [
    "Full Stack Development Experience",
    "Modern JavaScript Ecosystem",
    "Database Design & Optimization",
    "RESTful API Architecture",
  ];

  return (
    <section id="resume" className="py-24 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(120_100%_50%/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(120_100%_50%/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(120_100%_50%/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 justify-center mb-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Briefcase className="text-primary" size={16} />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wider">
              MY RESUME
            </h2>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 border-glow">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:glow-green-strong transition-all duration-500">
                  <FileText className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={36} />
                </div>

                <h3 className="font-display text-xl font-bold mb-2 text-foreground tracking-wider">
                  DOWNLOAD RESUME
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Get a detailed overview of my experience, skills, and education.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                  {resumeHighlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group/h"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-primary/50 group-hover/h:text-primary group-hover/h:scale-110 transition-all duration-200 shrink-0"
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleDownload}
                  className="rounded-xl glow-green-strong hover:scale-105 transition-all duration-300 font-display tracking-wider"
                >
                  <Download size={18} /> DOWNLOAD PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
