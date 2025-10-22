// components/CSRVideoSlide.js

import { Video } from "./Video";
import { motion } from "framer-motion";

export default function CSRVideoSlide() {
  return (
    <div className="px-14 py-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="text-center mb-4"
      >
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Cliente-Side Rendering (CSR)
        </h1>
      </motion.div>
      <p className="text-lg text-center">
        O problema da tela vazia: tudo esperando o JavaScript e a API.
      </p>
      <Video
        videoId="4-Lel1oaV7M"
        start={0} // Começa no início do CSR
        end={55} // Termina no fim do CSR
        title="CSR Animation"
      />
    </div>
  );
}
