import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-10">
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-4">
        {/* Redes Sociais */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Ramongc08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={28} className="hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.instagram.com/ramon.118/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={28} className="hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>

        {/* Informações de contato */}
        <div className="text-sm space-y-1">
          <p>📞 (83) 99999-9999</p>
          <p>✉️ ramon.118@example.com</p>
        </div>

        {/* Direitos autorais */}
        <p className="text-xs text-gray-500 pt-4">© 2025 Ramon GC. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
