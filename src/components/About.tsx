import { Briefcase, GraduationCap, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Consultant",
      description: "Think like a consultant, execute cross-functionally like an operator",
    },
    {
      icon: Lightbulb,
      title: "Strategist",
      description: "Product strategy, operations, and technology expertise",
    },
    {
      icon: GraduationCap,
      title: "UCLA Alum",
      description: "Data Science & Business Economics dual degree",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I bridge the gap between technology and business strategy, helping organizations 
            navigate digital transformation with data-driven insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl glass transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;