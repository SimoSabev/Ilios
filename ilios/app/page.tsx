"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainPage from "@/components/MainPage";
import AboutPage from "@/components/AboutPage";
import EndPage from "@/components/EndPage";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const totalPages = 3; // Number of pages

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        setDirection(event.key === "ArrowRight" ? "right" : "left");
        setCurrentPage(prevPage => {
          if (event.key === "ArrowRight") {
            return Math.min(prevPage + 1, totalPages - 1);
          } else if (event.key === "ArrowLeft") {
            return Math.max(prevPage - 1, 0);
          }
          return prevPage;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleArrowClick = (direction: "left" | "right") => {
    setDirection(direction);
    setCurrentPage(prevPage => {
      if (direction === "right") {
        return Math.min(prevPage + 1, totalPages - 1);
      } else if (direction === "left") {
        return Math.max(prevPage - 1, 0);
      }
      return prevPage;
    });
  };

  const pageVariants = {
    initial: (direction: "left" | "right") => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
    }),
    enter: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <main className="w-screen h-screen flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            className="w-screen h-screen"
          >
            {currentPage === 0 && <MainPage />}
            {currentPage === 1 && <AboutPage />}
            {currentPage === 2 && <EndPage currentPage={currentPage} />}
          </motion.div>
        </AnimatePresence>
      </main>
      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full focus:outline-none"
        onClick={() => handleArrowClick("left")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full focus:outline-none"
        onClick={() => handleArrowClick("right")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {/* Page Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              index === currentPage ? "bg-background scale-125" : "bg-slate-800"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
