"use client";

import { motion } from "framer-motion";
import { Globe, Server, MonitorSmartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function WebHistorySlide() {
  const [selected, setSelected] = useState<any>(null);

  const timeline = [
    {
      year: "1990-2000",
      title: "Web Estática",
      icon: Globe,
      description: "HTML puro, páginas estáticas, sem interatividade",
      color: "text-gray-400",
      example: "https://meusite.com.br/~vitor/arquivo.html",
      image: "/images/web-estatica.png",
    },
    {
      year: "2000-2010",
      title: "Web Dinâmica (SSR Clássico)",
      icon: Server,
      description:
        "PHP, ASP.NET, Ruby on Rails, Java (JSP/Servlets)- Server-side rendering",
      color: "text-blue-400",
      image: "/images/web-dinamica.png",
    },
    {
      year: "2010-2020",
      title: "Era das SPAs",
      icon: MonitorSmartphone,
      description: "React, Angular, Vue - Client-side rendering",
      color: "text-green-400",
      image: "/images/spa-era.png",
    },
    {
      year: "2020+",
      title: "Full-Stack Frameworks",
      icon: Server,
      description: "Next.js, Remix - Híbrido (SSR + CSR)",
      color: "text-cyan-400",
      image: "/images/next-era.png",
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-16">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-7xl font-bold mb-20 text-center"
      >
        Contexto Histórico da Web
      </motion.h1>

      <div className="grid grid-cols-4 gap-8 w-full ">
        {timeline.map((era, index) => {
          const Icon = era.icon;
          return (
            <motion.div
              key={era.year}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative cursor-pointer"
              onClick={() => setSelected(era)}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all">
                <div className={`${era.color} mb-6 flex justify-center`}>
                  <Icon size={64} />
                </div>
                <div className="text-2xl font-bold text-gray-400 mb-3">
                  {era.year}
                </div>
                <h3 className="text-3xl font-bold mb-4">{era.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {era.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className=" min-w-5xl ">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl mb-4">
                  {selected.title} ({selected.year})
                </DialogTitle>
              </DialogHeader>
              <img
                src={selected.image}
                alt={selected.title}
                className="rounded-xl  border border-white/10 min-w-4xl"
              />
              {!!selected?.example && (
                <p className="text-black text-2xl text-center mt-4 font-bold">
                  {selected?.example}
                </p>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
