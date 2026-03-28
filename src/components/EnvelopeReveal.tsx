import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeRevealProps {
  isOpen: boolean;
  onOpen: () => void;
}

const EnvelopeReveal = ({ isOpen, onOpen }: EnvelopeRevealProps) => (
  <AnimatePresence>
    {!isOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center gradient-soft"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-8 cursor-pointer px-6"
          onClick={onOpen}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="text-8xl md:text-9xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💌
          </motion.div>
          <motion.p
            className="font-script text-3xl md:text-4xl text-primary text-center"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap to open...
          </motion.p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default EnvelopeReveal;
