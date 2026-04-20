import React from 'react';

function Hero() {
  return (
    // section ocupa o restante da tela, flex centraliza tudo no meio
    <section className="flex flex-col justify-center items-center text-center px-6 py-32">
      
      {/* Uma saudação sutil */}
      <p className="text-blue-400 font-medium mb-4 tracking-widest uppercase">
        Bem-vindo(a) ao meu espaço
      </p>

      {/* O Título Principal com o truque do Gradiente */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Olá, eu sou <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          O Seu Nome
        </span>
      </h1>

      {/* Seu Cargo */}
      <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
        Desenvolvedora Front-end
      </h2>

      {/* Um breve resumo */}
      <p className="max-w-2xl text-slate-400 mb-10 leading-relaxed text-lg">
        Transformo ideias complexas em interfaces limpas, rápidas e interativas. 
        Especializada no ecossistema React e focada na experiência do usuário.
      </p>

      {/* Botões de Ação (Call to Action) */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
          Ver Meus Projetos
        </button>
        <button className="px-8 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-full font-semibold transition-all hover:bg-slate-800">
          Acessar GitHub
        </button>
      </div>

    </section>
  );
}

export default Hero;