import { useState } from "react";
import EnvelopeReveal from "@/components/EnvelopeReveal";
import FloatingHearts from "@/components/FloatingHearts";
import MessageSection from "@/components/MessageSection";
import CounterSection from "@/components/CounterSection";
import FinalMessage from "@/components/FinalMessage";
import { motion } from "framer-motion";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-soft relative overflow-x-hidden">
      <EnvelopeReveal isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      {isOpen && (
        <>
          <FloatingHearts />

          <motion.header
            className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="text-7xl md:text-8xl mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💝
            </motion.span>
            <h1 className="font-script text-5xl md:text-8xl text-primary text-center leading-tight mb-4">
              Hello Beautiful!
            </h1>
            <p className="font-display text-lg md:text-xl text-muted-foreground text-center max-w-md">
              I made this just for you. Scroll down to explore... 👇
            </p>
          </motion.header>

          <MessageSection />
          <CounterSection />
          <FinalMessage />

          <footer className="py-10 text-center">
            <p className="font-script text-xl text-primary">
              Made with 💖 for someone special
            </p>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
