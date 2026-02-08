import { ArrowDown, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Location badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Los Angeles, California</span>
        </div>
        
        {/* Name */}
        <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Gauresh Kapoor</span>
        </h1>
        
        {/* Title */}
        <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground mb-4">
          Associate Consultant at <span className="text-foreground font-medium">PwC Deals</span>
        </p>
        
        {/* Tagline */}
        <p className="animate-fade-up-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Tech Strategy Consulting · UCLA Data Science & Business Economics
        </p>
        
        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/gaureshkapoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
          <a
            href="mailto:gauresh@example.com"
            className="group flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-secondary"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;