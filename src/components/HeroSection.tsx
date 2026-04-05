import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-4">
            &gt; Hello, World
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-foreground">Sudarsan</span>{" "}
            <span className="gradient-text">Mahapatro</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-2 font-body">
            Software Developer building reliable, optimized solutions with Java, JavaScript & modern web technologies.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Visakhapatnam, India</span>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="mailto:sudarsanmahapatro63@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-sm px-6 py-3 rounded-md hover:brightness-110 transition border-glow"
          >
            <Mail className="w-4 h-4" /> Get in Touch
          </a>
          <a
            href="https://github.com/Sudarsan06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground font-display text-sm px-6 py-3 rounded-md hover:border-primary/50 hover:text-primary transition"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sudarsan-mahapatro-616352298"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground font-display text-sm px-6 py-3 rounded-md hover:border-primary/50 hover:text-primary transition"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
