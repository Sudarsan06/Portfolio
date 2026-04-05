import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">&gt; Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            I'm always open to new opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="mailto:sudarsanmahapatro63@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition font-display text-sm">
            <Mail className="w-4 h-4 text-primary" /> sudarsanmahapatro63@gmail.com
          </a>
          <a href="tel:+917382466628" className="flex items-center gap-2 text-foreground hover:text-primary transition font-display text-sm">
            <Phone className="w-4 h-4 text-primary" /> +91 7382466628
          </a>
          <span className="flex items-center gap-2 text-muted-foreground font-display text-sm">
            <MapPin className="w-4 h-4 text-primary" /> Visakhapatnam, India
          </span>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://github.com/Sudarsan06" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-display text-xs text-muted-foreground">
            © 2025 Sudarsan Mahapatro. Built with passion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
