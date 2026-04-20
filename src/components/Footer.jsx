import React from 'react';
import { personalInfo } from '../data';

function Footer() {
  return (
    // mt-20 dá um empurrãozinho para baixo, separando dos projetos
    // border-t cria uma linha sutil no topo do rodapé
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-12 px-6 mt-20 text-center">
      
      <h2 className="text-2xl font-bold text-white mb-6">Vamos conversar?</h2>
      
      <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
        Estou sempre aberto a novas oportunidades e desafios para agregar valor. 
        Se quiser bater um papo sobre tecnologia, vagas ou projetos, me chame!
      </p>
      
      {/* Botões/Links de Contato */}
      <div className="flex justify-center items-center gap-6 mb-10">
        <a 
          href={personalInfo.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 transition-colors font-medium hover:underline underline-offset-4"
        >
          LinkedIn
        </a>
        <span className="text-slate-700">•</span>
        <a 
          href={personalInfo.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-300 hover:text-white transition-colors font-medium hover:underline underline-offset-4"
        >
          GitHub
        </a>
        <span className="text-slate-700">•</span>
        {/* O 'mailto:' faz o computador abrir o programa de e-mail sozinho! */}
        <a 
          href={`mailto:${personalInfo.email}`} 
          className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium hover:underline underline-offset-4"
        >
          E-mail
        </a>
      </div>
      
      {/* Assinatura de Direitos Autorais Dinâmica */}
      <p className="text-sm text-slate-600">
        &copy; {new Date().getFullYear()} {personalInfo.name}. Desenvolvido com React & Tailwind CSS.
      </p>
      
    </footer>
  );
}

export default Footer;