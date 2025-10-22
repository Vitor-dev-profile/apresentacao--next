import { motion } from "framer-motion";
import { Server, Layers } from "lucide-react";

export default function RSCIntroSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="text-center mb-2"
      >
        <div className="flex items-center justify-center gap-8 mb-4">
          <Server size={80} className="text-blue-400" />
          <Layers size={80} className="text-cyan-400" />
        </div>
        <h1 className="text-5xl font-bold mb-6">React Server Components</h1>
      </motion.div>

      <div className="grid grid-cols-2 gap-12 w-full max-w-7xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-6">O que são?</h2>
          <div className="space-y-4 text-2xl leading-relaxed">
            <p className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-xl">
              Componentes React que são{" "}
              <span className="text-blue-400 font-bold">
                renderizados no servidor
              </span>
            </p>
            <p className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-xl">
              Executam em ambiente{" "}
              <span className="text-blue-400 font-bold">Node.js</span>, não no
              browser
            </p>
            <p className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-xl">
              <span className="text-green-400 font-bold">Zero JavaScript</span>{" "}
              enviado ao cliente
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-cyan-400 ">Benefícios</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Performance",
                desc: "Menos JS = carregamento mais rápido",
              },
              {
                title: "Segurança",
                desc: "API keys e secrets ficam no servidor",
              },
              { title: "SEO", desc: "Conteúdo já renderizado para crawlers" },
              {
                title: "Acesso Direto",
                desc: "Banco de dados, filesystem, etc.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-4"
              >
                <h3 className="text-2xl font-bold mb-2 text-cyan-300">
                  {benefit.title}
                </h3>
                <p className="text-xl text-gray-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-12 bg-yellow-500/20 border border-yellow-500/50 rounded-xl px-10 py-6"
      >
        <p className="text-3xl text-yellow-300 font-semibold text-center">
          Por padrão, todos os componentes no App Router são Server Components
        </p>
      </motion.div> */}
    </div>
  );
}
