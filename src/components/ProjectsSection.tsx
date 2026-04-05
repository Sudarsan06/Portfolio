import { motion } from "framer-motion";
import { ExternalLink, Shield, Utensils } from "lucide-react";

const projects = [
  {
    title: "AI Helmet Detection System",
    year: "2025",
    icon: Shield,
    description:
      "Real-time safety monitoring system using YOLOv8 for helmet detection and MTCNN + DeepFace for face recognition. Designed for industrial safety gear compliance.",
    highlights: [
      "95% accuracy on test footage",
      "Live CCTV stream support",
      "Video processing pipeline for continuous monitoring",
      "Alert generation system",
    ],
    tags: ["YOLOv8", "MTCNN", "DeepFace", "Python", "Computer Vision"],
  },
  {
    title: "EatFit — Diet Planner",
    year: "2024",
    icon: Utensils,
    description:
      "Personalized diet planning web app providing dynamic meal suggestions based on daily calorie requirements.",
    highlights: [
      "Spoonacular API for healthy recipes",
      "TDEE RapidAPI for calorie calculation",
      "Support for weight loss, maintenance & gain goals",
    ],
    tags: ["HTML", "CSS", "JavaScript", "REST APIs"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">&gt; Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured Work
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="border border-border rounded-lg p-6 md:p-8 bg-card hover:border-primary/30 transition group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition">
                      {project.title}
                    </h3>
                    <span className="font-display text-xs text-muted-foreground">{project.year}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition opacity-0 group-hover:opacity-100" />
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <ul className="space-y-1 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-secondary-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span> {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-display px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
