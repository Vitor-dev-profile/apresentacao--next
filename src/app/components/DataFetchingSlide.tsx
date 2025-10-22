import { motion } from "framer-motion";
import { Database } from "lucide-react";

export default function DataFetchingSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-12"
      >
        <Database size={100} className="text-blue-400 mx-auto mb-8" />
        <h1 className="text-7xl font-bold mb-6">Data Fetching</h1>
        <p className="text-4xl text-gray-400">
          Server Components tornam tudo mais simples
        </p>
      </motion.div>

      <div className="w-full max-w-6xl space-y-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8"
        >
          <h2 className="text-4xl font-bold mb-6 text-red-400">
            Antes (Client Component)
          </h2>
          <div className="bg-black/60 rounded-xl p-8 border border-red-500/30 font-mono text-lg">
            <pre className="text-gray-300">
              {`'use client'
import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return <div>{/* render posts */}</div>;
}`}
            </pre>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-lg">
            <div className="bg-red-500/20 rounded-lg p-4 text-center">
              <div className="text-red-300">Mais código</div>
            </div>
            <div className="bg-red-500/20 rounded-lg p-4 text-center">
              <div className="text-red-300">Loading states</div>
            </div>
            <div className="bg-red-500/20 rounded-lg p-4 text-center">
              <div className="text-red-300">Bundle maior</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8"
        >
          <h2 className="text-4xl font-bold mb-6 text-green-400">
            Agora (Server Component)
          </h2>
          <div className="bg-black/60 rounded-xl p-8 border border-green-500/30 font-mono text-lg">
            <pre className="text-gray-300">
              {`export default async function Posts() {
  const posts = await db.posts.findMany();

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}`}
            </pre>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-lg">
            <div className="bg-green-500/20 rounded-lg p-4 text-center">
              <div className="text-green-300">Menos código</div>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4 text-center">
              <div className="text-green-300">Sem loading states</div>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4 text-center">
              <div className="text-green-300">Zero JS enviado</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-blue-500/20 border border-blue-500/50 rounded-xl px-10 py-8"
        >
          <div className="flex items-start gap-6">
            <div className="text-5xl">⚡</div>
            <div>
              <h3 className="text-3xl font-bold text-blue-300 mb-3">
                Vantagens:
              </h3>
              <ul className="space-y-3 text-2xl text-gray-200">
                <li>✓ Acesso direto ao banco de dados</li>
                <li>✓ Async/await nativo</li>
                <li>✓ Sem waterfalls de requisições</li>
                <li>✓ Conteúdo já renderizado para SEO</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
