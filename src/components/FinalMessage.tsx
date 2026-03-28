import { motion } from "framer-motion";

const FinalMessage = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 gap-8">
    <motion.div
      className="text-8xl md:text-9xl"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      ✨
    </motion.div>

    <motion.h2
      className="font-script text-4xl md:text-7xl text-primary text-center leading-tight"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      You Are Special
    </motion.h2>

    <motion.p
      className="font-display text-lg md:text-xl text-muted-foreground text-center max-w-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      This little page was made just for you, because you deserve to know how wonderful you are. Keep shining! 🌟
    </motion.p>

    <motion.div
      className="flex gap-4 text-4xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      {["💖", "🌸", "✨", "🦋", "🌈"].map((e, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
        >
          {e}
        </motion.span>
      ))}
    </motion.div>
  </section>
);

export default FinalMessage;
