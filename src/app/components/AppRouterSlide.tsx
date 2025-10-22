import { motion } from "framer-motion";
import { Folder, FileText, Sparkles } from "lucide-react";

export default function AppRouterSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-16">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center  mb-6">
          <h1 className="text-6xl font-bold">App Router</h1>
        </div>
        <p className="text-3xl text-gray-400">Next.js 13+ - A Grande Mudança</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-10 w-full max-w-7xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-red-400">
            Pages Router (Antigo)
          </h2>
          <div className="space-y-2 font-mono text-xl">
            <div className="bg-black/40 rounded-lg p-6 border border-red-500/20">
              <div className="text-gray-400 mb-2">pages/</div>
              <div className="pl-6 space-y-2">
                <div>├── index.tsx</div>
                <div>├── about.tsx</div>
                <div>├── api/</div>
                <div>└── _app.tsx</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-red-400">
              <span className="text-3xl">✗</span>
              <span className="text-lg">
                Tudo é Client Component por padrão
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6"
        >
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            App Router (Novo)
          </h2>
          <div className="space-y-2 font-mono text-xl">
            <div className="bg-black/40 rounded-lg p-6 border border-green-500/20">
              <div className="text-gray-400 mb-2">app/</div>
              <div className="pl-6 space-y-2">
                <div>├── page.tsx</div>
                <div>├── layout.tsx</div>
                <div>├── about/</div>
                <div className="pl-6">└── page.tsx</div>
                <div>└── api/</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-green-400">
              <span className="text-3xl">✓</span>
              <span className="text-lg">Server Components por padrão</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 grid grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {[
          { icon: Folder, text: "Layouts aninhados", color: "text-blue-400" },
          {
            icon: FileText,
            text: "Loading & Error states",
            color: "text-purple-400",
          },
          {
            icon: Sparkles,
            text: "React Server Components",
            color: "text-yellow-400",
          },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.text}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
            >
              <Icon size={48} className={`${item.color} mx-auto mb-4`} />
              <p className="text-xl">{item.text}</p>
            </div>
          );
        })}
      </motion.div> */}
    </div>
  );
}
