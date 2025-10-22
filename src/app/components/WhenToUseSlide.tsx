import { motion } from "framer-motion";
import { Server, MonitorSmartphone, CheckCircle, XCircle } from "lucide-react";

export default function WhenToUseSlide() {
  const serverUseCases = [
    { text: "Buscar dados do banco", good: true },
    { text: "Acessar variáveis de ambiente/secrets", good: true },
    { text: "Processar dados sensíveis", good: true },
    { text: "Reduzir bundle JavaScript", good: true },
    { text: "Usar Node.js APIs (fs, crypto)", good: true },
  ];

  const clientUseCases = [
    { text: "Adicionar interatividade (clicks, forms)", good: true },
    { text: "Usar hooks (useState, useEffect)", good: true },
    { text: "Acessar Browser APIs", good: true },
    { text: "Usar event listeners", good: true },
    { text: "Usar bibliotecas que dependem do DOM", good: true },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-16">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold mb-8 text-center"
      >
        Regras de Ouro: Quando Usar?
      </motion.h1>

      <div className="grid grid-cols-2 gap-12 w-full max-w-7xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <Server size={40} className="text-blue-400" />
            <h2 className="text-2xl font-bold text-blue-400">Server</h2>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4 space-y-4">
            {serverUseCases.map((useCase, index) => (
              <motion.div
                key={useCase.text}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 bg-black/30 rounded-lg  p-3 border border-blue-500/20"
              >
                <CheckCircle
                  size={20}
                  className="text-green-400 flex-shrink-0 mt-1"
                />
                <span className="text-md text-gray-200">{useCase.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-500/20 border border-blue-500/50 rounded-xl p-3">
            <p className="text-md text-blue-300 font-semibold">
              Use Server quando NÃO precisar de interatividade
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4  mb-4">
            <MonitorSmartphone size={40} className="text-orange-400" />
            <h2 className="text-2xl font-bold text-orange-400">Client</h2>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl  p-4 space-y-4">
            {clientUseCases.map((useCase, index) => (
              <motion.div
                key={useCase.text}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-4 bg-black/30 rounded-lg p-3 border border-orange-500/20"
              >
                <CheckCircle
                  size={20}
                  className="text-green-400 flex-shrink-0 mt-1"
                />
                <span className="text-md text-gray-200">{useCase.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl p-3">
            <p className="text-md text-orange-300 font-semibold">
              Use Client quando precisar de interatividade
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
