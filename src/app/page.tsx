"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import IntroSlide from "./components/IntroSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WebHistorySlide from "./components/WebHistorySlide";
import SPAProblemsSlide from "./components/SPAProblemsSlide";
import NextJsIntroSlide from "./components/NextJsIntroSlide";
import AppRouterSlide from "./components/AppRouterSlide";
import RSCIntroSlide from "./components/RSCIntroSlide";
import RSCvsClientSlide from "./components/RSCvsClientSlide";
import UseClientDirectiveSlide from "./components/UseClientDirectiveSlide";
import WhenToUseSlide from "./components/WhenToUseSlide";
import DataFetchingSlide from "./components/DataFetchingSlide";
import InteractivitySlide from "./components/InteractivitySlide";
import WrapUpSlide from "./components/WrapUpSlide";
import CSRVideoSlide from "./components/CSRVideoSlide";
import SSRVideoSlide from "./components/SSRVideoSlide";
import StaticVideoSlide from "./components/StaticVideoSlide";
import UnknownWords from "./components/UnknownWords";

export default function Home() {
  const [direction, setDirection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, component: IntroSlide, title: "Introdução" },
    { id: 13, component: UnknownWords, title: "Palavras desconhecidas" },
    { id: 1, component: WebHistorySlide, title: "Contexto Histórico" },
    { id: 3, component: StaticVideoSlide, title: "Static Site" }, // Novo slide
    { id: 3, component: CSRVideoSlide, title: "Demo: CSR em Ação" }, // Novo slide
    { id: 4, component: SSRVideoSlide, title: "Demo: SSR em Ação" }, // Novo slide
    { id: 2, component: SPAProblemsSlide, title: "Problemas das SPAs" },
    { id: 5, component: NextJsIntroSlide, title: "O que é Next.js?" },
    { id: 6, component: AppRouterSlide, title: "App Router" },
    { id: 7, component: RSCIntroSlide, title: "Server Components" },
    { id: 8, component: RSCvsClientSlide, title: "RSC vs Client Components" },
    { id: 9, component: UseClientDirectiveSlide, title: "use client" },
    { id: 10, component: WhenToUseSlide, title: "Quando Usar?" },
    { id: 11, component: InteractivitySlide, title: "Interatividade" },
    { id: 12, component: WrapUpSlide, title: "Conclusão" },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="relative h-screen flex flex-col">
        <div className="flex-1 relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="flex gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${
                    index === currentSlide
                      ? "w-16 bg-blue-500"
                      : "w-3 bg-white/30 hover:bg-white/50"
                  } h-3 rounded-full`}
                  title={slide.title}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        <div className="absolute top-8 right-8 z-50 text-xl font-mono text-white/60">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
