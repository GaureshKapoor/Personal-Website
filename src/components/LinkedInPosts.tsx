import { Linkedin, ExternalLink } from "lucide-react";

const posts = [
  {
    id: 1,
    preview: "Coming soon — LinkedIn posts will be displayed here.",
    date: "",
    url: "https://www.linkedin.com/in/gaureshkapoor/recent-activity/all/",
  },
];

const LinkedInPosts = () => {
  return (
    <section id="posts" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Linkedin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">LinkedIn</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Posts & Insights</h2>
          <p className="text-muted-foreground">
            Thoughts on tech, strategy, and consulting
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-2xl glass transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10"
            >
              <p className="text-muted-foreground mb-4">{post.preview}</p>
              {post.date && (
                <p className="text-sm text-muted-foreground/60 mb-4">{post.date}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/gaureshkapoor/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-secondary"
          >
            View all posts on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;