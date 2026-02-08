import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Always interested in discussing tech strategy, consulting, or new opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/gaureshkapoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
          <a
            href="mailto:gauresh@example.com"
            className="group flex items-center gap-3 px-8 py-4 glass rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-secondary"
          >
            <Mail className="w-5 h-5" />
            Email
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;