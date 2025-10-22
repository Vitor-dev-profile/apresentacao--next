import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function InteractivitySlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-4"
      >
        <h1 className="text-4xl font-bold mb-2">Adicionando Interatividade</h1>
        <p className="text-2xl text-gray-400">Quando um botão força mudança</p>
      </motion.div>

      <div className="max-w-8xl grid grid-cols-2 gap-6">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4"
        >
          <h2 className="text-xl font-bold mb-4 text-blue-400">
            Server Component (inicial)
          </h2>
          <div className="bg-black/60 rounded-xl p-6 border border-blue-500/30 font-mono ">
            <SyntaxHighlighter language="tsx" style={vscDarkPlus} wrapLines>
              {`export default async function ProductPage() {
  const products = await db.products.findMany();

  return (
    <div>
      <h1>Produtos</h1>
      <button>Adicionar ao Carrinho</button>
      {products.map(p => <ProductCard {...p} />)}
    </div>
  );
}

// ❌ ERRO: onClick não funciona em Server Component!`}
            </SyntaxHighlighter>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm border  border-white/10 rounded-2xl p-4 max-h-[60vh] overflow-auto"
        >
          <h2 className="text-xl font-bold  mb-4 text-green-400">
            Solução: Extrair para Client Component
          </h2>
          <div className="bg-black/60 rounded-xl p-4 border border-green-500/30 font-mono text-sm space-y-4">
            <div>
              <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                wrapLines
                customStyle={{
                  fontSize: "0.4rem", // tamanho da fonte
                }}
              >
                {`'use client'

export function AddToCartButton({ productId }) {
  return (
    <button onClick={() => addToCart(productId)}>
      Adicionar ao Carrinho
    </button>
  );
}`}
              </SyntaxHighlighter>
            </div>

            <div className="border-t border-gray-700 pt-2">
              <SyntaxHighlighter language="tsx" style={vscDarkPlus} wrapLines>
                {`import { AddToCartButton } from './AddToCartButton';

export default async function ProductPage() {
  const products = await db.products.findMany();

  return (
    <div>
      <h1>Produtos</h1>
      <AddToCartButton productId={123} />
      {products.map(p => <ProductCard {...p} />)}
    </div>
  );
}

// ✅ Funciona! Server Component com Client Component dentro`}
              </SyntaxHighlighter>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
