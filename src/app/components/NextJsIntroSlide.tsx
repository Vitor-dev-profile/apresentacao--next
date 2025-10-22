import { motion } from "framer-motion";
import { Zap, Check } from "lucide-react";

export default function NextJsIntroSlide() {
  const features = [
    "Server-Side Rendering (SSR)",
    "Static Site Generation (SSG)",
    "Incremental Static Regeneration (ISR)",
    "API Routes integradas",
    "Otimização automática de imagens",
    "Code splitting automático",
    "Suporte TypeScript nativo",
    "File-based routing",
  ];

  return (
    <div className="min-h-full flex items-center justify-center px-6 sm:px-10 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full max-w-7xl items-center">
        {/* Lado esquerdo */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
            <Zap
              size={70}
              className="text-blue-400 md:w-[100px] md:h-[100px]"
            />
            <h1 className="text-5xl md:text-8xl font-bold">Next.js</h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl text-gray-300 leading-relaxed mb-6 md:mb-8"
          >
            Framework React que resolve os problemas das SPAs tradicionais
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-500/20 border border-blue-500/50 rounded-xl p-4 md:p-6"
          >
            <p className="text-lg md:text-2xl text-blue-300">
              Criado pela Vercel em 2016 para trazer SSR para o ecossistema
              React
            </p>
          </motion.div>
        </motion.div>

        {/* Lado direito */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-4 text-blue-400 text-center md:text-left">
            Principais Features
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4  hover:bg-white/10 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-8 md:h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check
                    size={20}
                    className="text-green-400 md:w-[24px] md:h-[24px]"
                  />
                </div>
                <span className="text-lg ">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
