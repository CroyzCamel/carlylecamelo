import React from 'react';
import { experiences } from '../data'; // Importando o nosso "Banco de Dados"

function Experience() {
  return (
    // max-w-4xl centraliza o bloco e limita a largura para não ficar esticado em monitores gigantes
    <section className="py-20 px-6 max-w-4xl mx-auto">
      
      {/* Título da Seção */}
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="text-blue-500">#</span> Experiência Profissional
      </h2>

      {/* A MÁGICA DA LINHA DO TEMPO
        'relative' permite posicionar a bolinha. 'border-l' cria a linha vertical principal.
      */}
      <div className="relative border-l border-slate-700 ml-3 md:ml-4">

        {/* Aqui o React varre a sua lista de experiências e desenha um card para cada uma */}
        {experiences.map((xp) => (
          <div key={xp.id} className="mb-12 ml-8 md:ml-10 group">
            
            {/* A "Bolinha" Azul na linha do tempo */}
            <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] ring-4 ring-slate-950 transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-400"></span>

            {/* O Cartão de Conteúdo (Card) */}
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors duration-300">
              
              {/* Data e Cargo */}
              <span className="text-sm text-blue-400 font-semibold tracking-wide uppercase">
                {xp.period}
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                {xp.title}
              </h3>
              <h4 className="text-lg text-slate-300 font-medium mb-4">
                {xp.company}
              </h4>
              
              {/* Descrição */}
              <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                {xp.description}
              </p>

              {/* As Pílulas (Badges) de Tecnologia */}
              <div className="flex flex-wrap gap-2">
                {xp.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;