const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm a passionate Full Stack Developer with a strong focus on building
            scalable, high-performance web applications. I specialize in the modern
            JavaScript ecosystem — from crafting pixel-perfect UIs with{" "}
            <span className="text-foreground font-medium">React</span> to architecting
            robust backends with{" "}
            <span className="text-foreground font-medium">Node.js</span> and{" "}
            <span className="text-foreground font-medium">PostgreSQL</span>.
          </p>
          <p>
            I thrive on solving complex problems and transforming ideas into elegant,
            user-centric digital products. Whether it's optimizing database queries,
            designing RESTful APIs, or implementing responsive interfaces, I bring a
            detail-oriented, problem-solving mindset to every project.
          </p>
          <p>
            I'm always eager to learn new technologies and contribute to meaningful
            projects that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
