"use client";
import React, { useEffect, useRef, useState } from "react";
import firstImage from "../public/Main-Image.png"


export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3; // Number of pages

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mainRef.current) return;

      const { key } = event;
      if (key === "ArrowRight" || key === "ArrowLeft") {
        event.preventDefault();
        let newPage = currentPage;

        if (key === "ArrowRight") {
          newPage = Math.min(currentPage + 1, totalPages - 1);
        } else if (key === "ArrowLeft") {
          newPage = Math.max(currentPage - 1, 0);
        }

        setCurrentPage(newPage);
        scrollToPage(newPage);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  const handleArrowClick = (direction: "left" | "right") => {
    let newPage = currentPage;

    if (direction === "right") {
      newPage = Math.min(currentPage + 1, totalPages - 1);
    } else if (direction === "left") {
      newPage = Math.max(currentPage - 1, 0);
    }

    setCurrentPage(newPage);
    scrollToPage(newPage);
  };

  const scrollToPage = (page: number) => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        left: page * mainRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-screen h-screen">
      <main
        ref={mainRef}
        className="flex overflow-x-hidden snap-x snap-mandatory w-screen h-screen overflow-y-hidden"
        style={{ scrollBehavior: "smooth" }} 
      >
        <div
          className="w-screen h-screen snap-center flex-shrink-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-screen h-screen snap-center flex-shrink-0"
          // style={{
          //   backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(https://i.pinimg.com/236x/81/8b/96/818b9621947abf574bac25a2a969e8be.jpg)`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
        ></div>
        <div
          className="w-screen h-screen snap-center flex-shrink-0"
          // style={{
          //   backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(https://i.pinimg.com/236x/7b/98/f7/7b98f75f9ba9e541829b9f2fe07517f2.jpg)`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
        ></div>
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
              index === currentPage ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
