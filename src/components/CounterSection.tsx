import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CounterSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("smile-count");
    if (stored) setCount(Number(stored));
  }, []);

  const handleClick = () => {
    const next = count + 1;
    setCount(next);
    localStorage.setItem("smile-count", String(next));
  };

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 gap-8">
      <motion.h2
        className="font-script text-3xl md:text-5xl text-primary text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Smile Counter 😄
      </motion.h2>

      <motion.p className="text-muted-foreground text-center max-w-md font-display">
        Every time you think of something happy, tap the button!
      </motion.p>

      <motion.button
        className="gradient-warm text-primary-foreground font-display text-xl px-10 py-5 rounded-full shadow-glow"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleClick}
      >
        😊 Tap Me!
      </motion.button>

      <motion.div
        className="font-script text-6xl md:text-8xl text-primary"
        key={count}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {count}
      </motion.div>

      <p className="text-muted-foreground font-display text-sm">
        {count === 0 ? "Start tapping!" : count < 10 ? "Keep going! 💕" : count < 50 ? "You're amazing! ✨" : "You're a star! 🌟"}
      </p>
    </section>
  );
};

export default CounterSection;
