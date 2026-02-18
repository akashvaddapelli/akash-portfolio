import { Download, FileText } from "lucide-react";
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

  return (
    <section id="resume" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 justify-center mb-12">
          <div className="h-px w-12 bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            My Resume
          </h2>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="max-w-lg mx-auto border border-border rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="text-primary" size={32} />
          </div>
          <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
            Download My Resume
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Get a detailed overview of my experience, skills, and education.
          </p>
          <Button variant="hero" size="lg" onClick={handleDownload}>
            <Download size={18} /> Download PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
