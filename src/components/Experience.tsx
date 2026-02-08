const experiences = [
  {
    company: "PwC",
    role: "Associate Consultant",
    team: "Deals Strategy",
    period: "Jun 2025 – Present",
    location: "Los Angeles, CA",
    description: "Leading tech strategy consulting engagements for M&A and digital transformation initiatives.",
    current: true,
  },
  {
    company: "UCLA",
    role: "Student",
    team: "Data Science & Business Economics",
    period: "2021 – 2025",
    location: "Los Angeles, CA",
    description: "Dual degree in Data Science and Business Economics with focus on analytics and strategy.",
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">
            Building expertise at the intersection of technology and strategy
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company + exp.role}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 mt-2">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-2xl glass transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-primary font-semibold">{exp.company}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.team} · {exp.period}
                    </p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;