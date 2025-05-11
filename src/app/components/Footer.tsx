import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link"; 

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-6"> 
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-6">

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8C56F4]">RAMONGC8</h2> 

        {/* Informações de Contato */}
        <div className="text-sm space-y-2"> 
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt size={18} />
            <p>(83) 99999-9999</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope size={18} />
            <p>ramon.118@example.com</p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Ramongc08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform transform hover:scale-125 duration-300 hover:text-[#8C56F4]"
          >
            <FaGithub size={28} className="hover:text-[#8C56F4] transition-colors duration-300" />
          </a>
          <a
            href="https://www.instagram.com/ramon.118/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform transform hover:scale-125 duration-300 hover:text-[#8C56F4]"
          >
            <FaInstagram size={28} className="hover:text-[#8C56F4] transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramon-gc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform transform hover:scale-125 duration-300 hover:text-[#8C56F4]"
          >
            <FaLinkedin size={28} className="hover:text-[#8C56F4] transition-colors duration-300" />
          </a>
        </div>

        {/* Menu de Rotas (Links) */}
        <div className="w-full mt-4"> 
          <nav className="flex justify-center space-x-6">
            <Link href="/" className="text-sm hover:text-[#8C56F4] transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-sm hover:text-[#8C56F4] transition-colors duration-300">Sobre</Link>
            <Link href="/projects" className="text-sm hover:text-[#8C56F4] transition-colors duration-300">Projetos</Link>
            <Link href="/contact" className="text-sm hover:text-[#8C56F4] transition-colors duration-300">Contato</Link>
          </nav>
        </div>

        {/* Direitos autorais */}
        <p className="text-xs text-gray-500 pt-4">© 2025 Ramon GC. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
