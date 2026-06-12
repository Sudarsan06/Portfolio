import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Flame, ArrowUpRight, Layers, Code2 } from "lucide-react";
import portrait from "@/assets/sudarsan-portrait.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-24 pb-16 px-6">
      <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-accent/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-14 items-center">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-card text-card-foreground rounded-[2rem] p-6 shadow-[0_30px_80px_-30px_rgba(255,90,31,0.45)] mx-auto w-full max-w-sm"
        >
          {/* Dashed orbit */}
          <svg
            className="absolute -top-6 -left-6 w-40 h-40 text-primary/70 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
          </svg>

          <div className="relative rounded-[1.25rem] overflow-hidden aspect-[4/5] bg-primary">
            <img
              src={portrait.url}
              alt="Sudarsan Mahapatro — Software Developer"
              className="w-full h-full object-cover mix-blend-luminosity opacity-95"
            />
            <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
          </div>

          {/* Flame badge */}
          <div className="relative -mt-5 flex justify-center">
            <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg ring-4 ring-card">
              <Flame className="w-5 h-5" />
            </div>
          </div>

          <h2 className="font-body text-2xl font-extrabold text-center mt-3">Sudarsan Mahapatro</h2>

          <p className="text-center text-sm text-card-foreground/70 mt-3 px-2 leading-relaxed">
            Software Developer crafting reliable, performant products with Java, Spring Boot & modern web stacks.
          </p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <a href="https://github.com/Sudarsan06" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-110 transition" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sudarsan-mahapatro" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-110 transition" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sudarsanmahapatro63@gmail.com" className="text-primary hover:scale-110 transition" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#contact" className="text-primary hover:scale-110 transition" aria-label="Contact">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col"
        >
          <h1 className="font-body font-black uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(2.75rem,7vw,6.5rem)]">
            Software
            <br />
            <span className="text-outline">Developer</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mt-6 leading-relaxed">
            Passionate about building intuitive backends and engaging interfaces. Specialized in transforming ideas into reliable, well-engineered products.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 max-w-xl">
            {[
              { k: "9.09", l: "CGPA" },
              { k: "+6", l: "Projects Built" },
              { k: "+3", l: "Certifications" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-body text-4xl md:text-5xl font-black text-foreground">{s.k}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1 leading-tight">{s.l}</p>
              </div>
            ))}
          </div>

          {/* Action cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10 max-w-2xl">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-6 min-h-[160px] flex flex-col justify-between transition hover:-translate-y-1"
            >
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 160" preserveAspectRatio="none">
                <path d="M0,120 Q50,80 100,110 T200,90" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M0,140 Q60,100 120,130 T200,110" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
              <Layers className="w-7 h-7 relative z-10" />
              <div className="flex items-end justify-between relative z-10">
                <h3 className="font-body font-extrabold text-lg uppercase leading-tight max-w-[10rem]">
                  Featured<br />Projects
                </h3>
                <span className="w-9 h-9 rounded-md border border-primary-foreground/60 flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            <a
              href="#skills"
              className="group relative overflow-hidden rounded-2xl bg-accent text-accent-foreground p-6 min-h-[160px] flex flex-col justify-between transition hover:-translate-y-1"
            >
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 160" preserveAspectRatio="none">
                <path d="M-10,40 L60,120 L130,40 L200,120" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M-10,80 L60,160 L130,80 L200,160" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <Code2 className="w-7 h-7 relative z-10" />
              <div className="flex items-end justify-between relative z-10">
                <h3 className="font-body font-extrabold text-lg uppercase leading-tight max-w-[12rem]">
                  Java, Spring<br />React, SQL
                </h3>
                <span className="w-9 h-9 rounded-md border border-accent-foreground/60 flex items-center justify-center group-hover:bg-accent-foreground group-hover:text-accent transition">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
