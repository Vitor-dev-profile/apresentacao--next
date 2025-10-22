// components/SSRVideoSlide.js

import { Video } from "./Video";
import { motion } from "framer-motion";

export default function StaticVideoSlide() {
  return (
    <div className="p-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="text-center "
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Static Site
        </h1>
      </motion.div>
      {/* <p className="text-lg mt-4 text-center">
        Conteúdo imediato, mas com custo: O servidor trabalha a cada requisição.
      </p> */}
      <Video
        videoId="1zhT23VDVDc"
        start={0} // Começa o SSR
        end={120} // Termina o SSR
        title="SSR Animation"
      />
    </div>
  );
}
