import { motion } from "framer-motion";
import { OrbitingCirclesDemo } from "./Orbit";

export default function UnknownWords() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-16">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-6xl font-bold mb-12 text-center"
      >
        Palavras desconhecidas
      </motion.h1>
      <OrbitingCirclesDemo />
    </div>
  );
}
