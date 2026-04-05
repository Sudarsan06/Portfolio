import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "HTML & CSS", level: 85 },
  { name: "MongoDB", level: 70 },
  { name: "SQL", level: 75 },
  { name: "Python", level: 70 },
  { name: "Figma", level: 65 },
];

const tools = ["Git & GitHub", "NPM", "MongoDB Compass", "Cisco Packet Tracer"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">&gt; Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex justify-between mb-1">
                <span className="font-display text-sm text-foreground">{skill.name}</span>
                <span className="font-display text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm text-muted-foreground mb-3">Tools</p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="font-display text-xs px-4 py-2 rounded-md border border-border text-foreground hover:border-primary/50 hover:text-primary transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
