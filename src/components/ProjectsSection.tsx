import { motion } from "framer-motion";
import { ExternalLink, Shield, Utensils, Github, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "ExamSphere — Online Examination Platform",
    year: "2026",
    icon: GraduationCap,
    liveUrl: "https://examsphere-up4d.onrender.com",
    githubUrl: "https://github.com/Sudarsan06/ExamSphere",
    description:
      "Full-stack online examination platform with 15+ core modules for authentication, exam management, question banks, result processing, and user administration.",
    highlights: [
      "Dual-factor OTP verification with BCrypt password hashing",
      "RESTful backend modules for exam & question bank management",
      "Automated score calculation and result processing",
      "Deployed on Railway",
    ],
    tags: ["Spring Boot", "Java", "SQL Server", "JavaScript", "Thymeleaf"],
  },
  {
    title: "AI Helmet Detection System",
    year: "2025",
    icon: Shield,
    description:
      "Real-time safety monitoring system using YOLOv8 for helmet detection and MTCNN + DeepFace for face recognition. Designed for industrial safety gear compliance.",
    highlights: [
      "95% accuracy on test footage",
      "Live RTSP / CCTV stream support",
      "OpenCV video processing pipeline for continuous monitoring",
      "Identifies individuals neglecting safety protocols",
    ],
    tags: ["YOLOv8", "MTCNN", "DeepFace", "OpenCV", "Python"],
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
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-display text-muted-foreground hover:text-primary transition"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-display text-muted-foreground hover:text-primary transition"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  )}
                </div>
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
