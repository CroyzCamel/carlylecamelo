import React from "react";
import { personalInfo } from "../data";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center px-6 py-32">
      <p className="text-blue-400 font-medium mb-4 tracking-widest uppercase">
        Bem-vindo(a) ao meu espaço
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Olá, eu sou <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
          Carlyle Camelo
        </span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
        Desenvolvedor Front-end
      </h2>
      <p className="max-w-2xl text-slate-400 mb-10 leading-relaxed text-lg">
        Transformo ideias complexas em interfaces limpas, rápidas e interativas.
        Especializada no ecossistema React e focada na experiência do usuário.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projetos"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/30 text-center inline-block smoth"
        >
          Ver Meus Projetos
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-full font-semibold transition-all hover:bg-slate-800 text-center inline-block"
        >
          Acessar GitHub
        </a>
      </div>
    </section>
  );
}

export default Hero;
