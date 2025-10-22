"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseClientDirectiveSlide() {
  const serverCode = `export default async function ProductList() {
  const products = await db.products.findMany();

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}`;

  const clientCode = `'use client'

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Cliques: {count}
    </button>
  );
}`;

  return (
    <div className="h-full flex flex-col items-center justify-center p-20">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center flex gap-8 mb-2"
      >
        <Code2 size={60} className="text-cyan-400 mx-auto " />
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-cyan-400 font-mono">'use client'</span>
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
        >
          <h2 className="text-lg font-bold mb-4 text-cyan-400">
            Server Component (Padrão)
          </h2>
          <div className="rounded-xl overflow-hidden border border-cyan-500/30">
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              showLineNumbers
              customStyle={{ margin: 0, background: "#1e1e1e" }}
            >
              {serverCode}
            </SyntaxHighlighter>
          </div>
          <div className="mt-4 flex items-center gap-3 text-green-400 text-lg">
            <span className="text-lg">✓</span>
            <span>Acessa banco de dados diretamente</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-400">
            Client Component (com 'use client')
          </h2>
          <div className="rounded-xl overflow-hidden border border-orange-500/30">
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              showLineNumbers
              customStyle={{ margin: 0, background: "#1e1e1e" }}
            >
              {clientCode}
            </SyntaxHighlighter>
          </div>
          <div className="mt-4 flex items-center gap-3 text-orange-400 text-lg">
            <span className="text-lg">✓</span>
            <span>Usa hooks e interatividade</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
