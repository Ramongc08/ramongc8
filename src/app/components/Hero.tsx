"use client"; 
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  SiJavascript, SiHtml5, SiCss3, SiSwift, SiMysql, SiReact,
  SiReactrouter, SiBootstrap, SiTailwindcss, SiTypescript, SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


const technologies = [
  { icon: <SiHtml5 className="text-orange-500" />, label: "HTML5" },
  { icon: <SiCss3 className="text-blue-500" />, label: "CSS3" },
  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
  { icon: <SiReact className="text-cyan-400" />, label: "React" },
  { icon: <SiReactrouter className="text-pink-500" />, label: "React Native" },
  { icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind CSS" },
  { icon: <SiBootstrap className="text-purple-600" />, label: "Bootstrap" },
  { icon: <FaJava className="text-orange-600" />, label: "Java" },
  { icon: <SiSwift className="text-orange-400" />, label: "Swift" },
  { icon: <SiMysql className="text-blue-500" />, label: "MySQL" },
  { icon: <SiPython className="text-yellow-300" />, label: "Python" },
];

export default function Hero() {
  const [typingKey, setTypingKey] = useState(0);
  const [done, setDone] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 


  useEffect(() => {
    setIsMounted(true); 

    if (typeof window !== 'undefined') { 
      const animate = () => {
        setTypingKey((prev) => prev + 1);
        setDone(false);
        setTimeout(() => setDone(true), 3000);
      };

      animate();
      const interval = setInterval(animate, 8000);
      return () => clearInterval(interval);
    }
  }, []);

  
  if (!isMounted) return null;

  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-screen bg-black overflow-hidden text-white px-4">
      
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl text-white font-medium mb-6"
      >
        Bem-vindo ao meu portfólio
      </motion.p>


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`text-6xl sm:text-8xl font-mono font-bold ${styles.gradientText}`}
      >
        {"< / >"}
      </motion.div>

      <div className="text-center mt-16">
        <motion.h1
          key={typingKey}
          className={clsx(
            "text-3xl sm:text-5xl font-extrabold mb-8",
            styles.typingFull,
            done && styles.done
          )}
        >
          Olá, eu sou <span className={styles.gradientText}>Ramon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Desenvolvedor Front-end focado em performance, design funcional e
          aplicações acessíveis.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg sm:text-xl font-semibold text-gray-400 mb-6"
        >
          Tecnologias
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-sm sm:text-base">
          {technologies.map((tech, idx) => (
            <TechIcon key={idx} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

type TechIconProps = {
  icon: React.ReactNode;
  label: string;
};

function TechIcon({ icon, label }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-3 justify-center hover:scale-110 active:scale-95 transition-transform p-4 rounded-lg"
    >
      <div className="text-3xl text-white hover:text-[#8C56F4]">{icon}</div> 
      <span className="text-white">{label}</span>
    </motion.div>
  );
}
