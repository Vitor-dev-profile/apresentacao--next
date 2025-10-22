import { motion } from "framer-motion";
import { AlertCircle, Search, Clock, Download } from "lucide-react";

export default function SPAProblemsSlide() {
  const problems = [
    {
      icon: Search,
      title: "SEO Limitado",
      description:
        "Crawlers não executam JavaScript, conteúdo invisível para buscadores",
      example: "Google Bot vê página em branco",
    },
    {
      icon: Clock,
      title: "First Load Lento",
      description:
        "Todo o JavaScript precisa ser baixado antes de mostrar conteúdo",
      example: "Bundle de 500KB+ para carregar",
    },
    {
      icon: Download,
      title: "Bundle Size Gigante",
      description:
        "Toda a aplicação é enviada para o cliente, mesmo partes não usadas",
      example: "node_modules indo para o browser",
    },
    {
      icon: AlertCircle,
      title: "Experiência Inicial Ruim",
      description: "Tela em branco enquanto JavaScript carrega e executa",
      example: "Loading spinners intermináveis",
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-10"
      >
        <h1 className="text-6xl font-bold mb-4">Problemas das SPAs</h1>
        <p className="text-2xl text-gray-400">
          Single Page Applications e seus desafios
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <motion.div
              key={problem.title}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 hover:bg-red-500/20 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Icon size={56} className="text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{problem.title}</h3>
                  <p className="text-lg text-gray-300 mb-2 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 border border-red-500/20">
                    <code className="text-md text-red-300 font-mono">
                      {problem.example}
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
