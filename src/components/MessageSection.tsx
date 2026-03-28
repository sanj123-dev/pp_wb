import { motion } from "framer-motion";

const messages = [
  { emoji: "🌟", text: "You make every moment special" },
  { emoji: "😊", text: "Your smile lights up the world" },
  { emoji: "💫", text: "You're one in a million" },
  { emoji: "🌸", text: "Like a flower, you bring beauty everywhere" },
];

const MessageSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 gap-12">
    <motion.h2
      className="font-script text-4xl md:text-6xl text-primary text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      A Few Things About You...
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          className="bg-card rounded-2xl p-8 shadow-soft flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 40, rotate: -2 + i * 1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
        >
          <span className="text-5xl">{msg.emoji}</span>
          <p className="font-display text-lg text-foreground">{msg.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default MessageSection;
