import { Brain, Code, Server, Wrench, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI / ML",
    skills: ["LLMs & Agentic Systems", "LangChain", "RLHF", "NLP", "Neural Networks", "Computer Vision (OpenCV)", "Time Series"],
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python (PyTorch, TensorFlow, Pandas, Scikit-learn)", "SQL", "TypeScript", "JavaScript", "Swift (iOS)", "R", "C++"],
  },
  {
    icon: Server,
    title: "Backend & Infra",
    skills: ["FastAPI", "PostgreSQL", "Supabase", "Hugging Face", "Azure", "AWS", "GCP", "GitHub Actions", "Docker", "Vercel"],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    skills: ["React/Next.js", "Expo (React Native)", "Jupyter", "Stripe", "PostHog", "Sentry", "JIRA", "Git/GitHub", "macOS/Linux"],
  },
  {
    icon: BarChart3,
    title: "Product & Analytics",
    skills: ["A/B Testing", "Linear", "Notion", "Excel", "Tableau", "Snowflake", "MongoDB (NoSQL)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground">
            Full-stack technical capabilities from AI/ML to production infrastructure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="p-6 rounded-2xl glass transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-secondary/50 text-sm text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-foreground cursor-default"
                    style={{
                      animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.03}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;