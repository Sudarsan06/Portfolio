import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">&gt; Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Background
          </h2>
        </motion.div>

        <div className="space-y-10">
          {/* Experience */}
          <motion.div
            className="relative pl-8 border-l-2 border-primary/30"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <Briefcase className="w-2.5 h-2.5 text-primary" />
            </div>
            <span className="font-display text-xs text-primary">2025</span>
            <h3 className="font-display text-lg font-bold text-foreground">AIML Intern</h3>
            <p className="text-sm text-muted-foreground mb-2">CodeCrafters · Visakhapatnam</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gained hands-on exposure to Python and applied core ML algorithms. Worked on models like YOLOv8, MTCNN, and DeepFace. Explored NumPy, Pandas, and scikit-learn for small-scale dataset analysis.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="relative pl-8 border-l-2 border-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
              <GraduationCap className="w-2.5 h-2.5 text-muted-foreground" />
            </div>
            <span className="font-display text-xs text-muted-foreground">2023 – 2027</span>
            <h3 className="font-display text-lg font-bold text-foreground">B.Tech CSE (AI & ML)</h3>
            <p className="text-sm text-muted-foreground mb-1">Anil Neerukonda Institute of Technology and Sciences</p>
            <p className="text-sm text-primary font-display">CGPA: 9.07</p>
          </motion.div>

          <motion.div
            className="relative pl-8 border-l-2 border-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
              <GraduationCap className="w-2.5 h-2.5 text-muted-foreground" />
            </div>
            <span className="font-display text-xs text-muted-foreground">2021 – 2023</span>
            <h3 className="font-display text-lg font-bold text-foreground">Intermediate (MPC)</h3>
            <p className="text-sm text-muted-foreground mb-1">Sri Chaitanya Junior College</p>
            <p className="text-sm text-primary font-display">96.3%</p>
          </motion.div>

          {/* Certification */}
          <motion.div
            className="relative pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
              <Award className="w-2.5 h-2.5 text-muted-foreground" />
            </div>
            <span className="font-display text-xs text-muted-foreground">Certification</span>
            <h3 className="font-display text-lg font-bold text-foreground">Basic Networking & Troubleshooting</h3>
            <p className="text-sm text-muted-foreground">Cisco Networking Academy</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
