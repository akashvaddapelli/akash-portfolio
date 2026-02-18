import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Resume</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-lg mx-auto bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-card-hover)]">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="text-primary" size={32} />
          </div>
          <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
            Download My Resume
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Get a detailed overview of my experience, skills, and education.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download size={18} /> Download PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
