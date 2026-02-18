import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 justify-center mb-12">
          <div className="h-px w-12 bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-background">
            My Resume
          </h2>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="max-w-lg mx-auto border border-background/10 rounded-lg p-8 text-center transition-all duration-300 hover:border-primary/50">
          <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
            <FileText className="text-primary" size={32} />
          </div>
          <h3 className="font-display text-xl font-semibold mb-2 text-background">
            Download My Resume
          </h3>
          <p className="text-background/50 mb-6 text-sm">
            Get a detailed overview of my experience, skills, and education.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/Akash-vaddapelli-resume.pdf" download="Akash-Vaddapelli-Resume.pdf">
              <Download size={18} /> Download PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
