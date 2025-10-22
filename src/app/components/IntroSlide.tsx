import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function IntroSlide() {
  return (
    <div className="h-full flex items-center justify-center p-16">
      <div className="text-center space-y-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="inline-block"
        >
          <Zap size={100} className="text-blue-400" />
        </motion.div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Server vs Client Components
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-light text-gray-300"
        >
          Entenda a Nova Arquitetura Next.js (App Router)
        </motion.h2>
      </div>
    </div>
  );
}
