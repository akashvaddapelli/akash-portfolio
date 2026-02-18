import { useState } from "react";
import { Mail, Linkedin, Github, Send, Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { icon: Mail, label: "Email", href: "mailto:akashvaddapelli862@gmail.com", text: "akashvaddapelli862@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/akash-vaddapelli-34a24b293/", text: "linkedin.com/in/akash-vaddapelli" },
    { icon: Github, label: "GitHub", href: "https://github.com/akashvaddapelli", text: "github.com/akashvaddapelli" },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 justify-center mb-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="text-primary" size={16} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Get In Touch
            </h2>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Social links */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110 transition-all duration-300">
                    <s.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{s.label}</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors duration-300 font-medium">{s.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="relative group/form">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 rounded-2xl blur opacity-0 group-hover/form:opacity-100 transition-opacity duration-500" />

            <form
              onSubmit={handleSubmit}
              className="relative space-y-5 bg-background border border-border rounded-2xl p-7 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-500"
            >
              <div>
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-border bg-muted/30 focus:border-primary focus:bg-background rounded-xl h-12 transition-all duration-300"
                />
                {errors.name && <p className="text-destructive text-xs mt-1.5 ml-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-border bg-muted/30 focus:border-primary focus:bg-background rounded-xl h-12 transition-all duration-300"
                />
                {errors.email && <p className="text-destructive text-xs mt-1.5 ml-1">{errors.email}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border-border bg-muted/30 focus:border-primary focus:bg-background resize-none rounded-xl transition-all duration-300"
                />
                {errors.message && <p className="text-destructive text-xs mt-1.5 ml-1">{errors.message}</p>}
              </div>
              <Button
                size="lg"
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 rounded-xl h-12"
              >
                {sending ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
