import { motion } from "framer-motion";
import { Server, MonitorSmartphone } from "lucide-react";

export default function RSCvsClientSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-16">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        Server vs Client Components
      </motion.h1>

      <div className="grid grid-cols-2 gap-12 w-full max-w-7xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <Server size={40} className="text-blue-400" />
            <h2 className="text-3xl font-bold text-blue-400">Server</h2>
          </div>

          <div className="space-y-3">
            <div className="bg-black/40 rounded-lg p-3 border border-blue-500/20">
              <div className="text-blue-300 font-mono text-lg mb-1">
                Onde roda:
              </div>
              <div className="text-lg">Servidor Node.js</div>
            </div>

            <div className="bg-black/40 rounded-lg p-3 border border-blue-500/20">
              <div className="text-blue-300 font-mono text-lg mb-1">
                Pode usar:
              </div>
              <div className="grid grid-cols-2 text-md">
                <div>✓ Database</div>
                <div>✓ Filesystem</div>
                <div>✓ API Secrets</div>
                <div>✓ Async/await direto</div>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-3 border border-blue-500/20">
              <div className="text-blue-300 font-mono text-lg mb-1">
                NÃO pode usar:
              </div>
              <div className="grid grid-cols-2 text-md">
                <div>✗ useState, useEffect</div>
                <div>✗ Event handlers</div>
                <div>✗ Browser APIs</div>
              </div>
            </div>

            <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-2">
              <div className="text-md font-bold text-green-400">
                0 KB de JavaScript
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-3"
        >
          <div className="flex items-center gap-4 mb-4">
            <MonitorSmartphone size={40} className="text-orange-400" />
            <h2 className="text-3xl font-bold text-orange-400">Client</h2>
          </div>

          <div className="space-y-3">
            <div className="bg-black/40 rounded-lg p-3 border border-orange-500/20">
              <div className="text-orange-300 font-mono text-lg mb-1">
                Onde roda:
              </div>
              <div className="text-lg">Browser do usuário</div>
            </div>

            <div className="bg-black/40 rounded-lg p-3 border border-orange-500/20">
              <div className="text-orange-300 font-mono text-lg mb-1">
                Pode usar:
              </div>
              <div className="grid grid-cols-2 text-md">
                <div>✓ useState, useEffect</div>
                <div>✓ Event handlers</div>
                <div>✓ Browser APIs</div>
                <div>✓ Interatividade</div>
              </div>
            </div>

            <div className="bg-black/40 rounded-lg p-4 border border-orange-500/20">
              <div className="text-orange-300 font-mono text-lg mb-1">
                NÃO pode usar:
              </div>
              <div className="grid grid-cols-2 text-md">
                <div>✗ Database direto</div>
                <div>✗ Filesystem</div>
                <div>✗ API Secrets</div>
              </div>
            </div>

            <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-2">
              <div className="text-md font-bold text-yellow-400">
                Adiciona JS ao bundle
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
