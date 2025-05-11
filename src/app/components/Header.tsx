"use client"; // Isso garante que o código será executado no cliente

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Garantindo que o código só acesse `window` no lado do cliente
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={`w-full shadow-md fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Ramongc8
        </div>
        <nav className="space-x-6 hidden sm:block">
          <Link href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="#projetos" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
            Projetos
          </Link>
          <Link href="#sobre" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
            Sobre mim
          </Link>
          <Link href="#contato" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
