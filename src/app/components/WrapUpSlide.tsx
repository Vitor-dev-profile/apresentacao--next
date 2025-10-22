import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Sparkles } from "lucide-react";

export default function WrapUpSlide() {
  const keyPoints = [
    "Next.js resolve problemas de SEO e performance das SPAs",
    "App Router é a nova forma de estruturar aplicações",
    "Server Components rodam no servidor (Node.js)",
    "Client Components rodam no browser (interatividade)",
    "Use 'use client' apenas quando necessário",
    "Server Components = Zero JavaScript no cliente",
  ];

  const resources = [
    { title: "Next.js Docs", url: "nextjs.org/docs" },
    { title: "React Server Components", url: "react.dev/reference/rsc" },
    { title: "App Router Guide", url: "nextjs.org/docs/app" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-6xl font-bold    bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Conclusão
        </h1>
      </motion.div>

      <div className="grid grid-cols-2 gap-12 w-full max-w-7xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center gap-4">
            <CheckCircle size={40} />
            Pontos-Chave
          </h2>
          {keyPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-2 hover:bg-white/10 transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mt-1">
                <span className="text-cyan-400 font-bold">{index + 1}</span>
              </div>
              <p className="text-md text-gray-200 leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-4">
              <BookOpen size={40} />
              Recursos
            </h2>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.url}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  className="bg-black/40 border border-blue-500/30 rounded-xl p-3 hover:border-blue-500/60 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-lg text-blue-300 font-mono">
                    {resource.url}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
