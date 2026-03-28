import { motion } from "framer-motion";

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 4,
  size: 12 + Math.random() * 20,
}));

const FloatingHearts = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {hearts.map((h) => (
      <motion.div
        key={h.id}
        className="absolute text-primary opacity-20"
        style={{ left: `${h.x}%`, fontSize: h.size, bottom: -30 }}
        animate={{ y: [0, -window.innerHeight - 100], opacity: [0, 0.4, 0] }}
        transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "easeOut" }}
      >
        ♥
      </motion.div>
    ))}
  </div>
);

export default FloatingHearts;
