import React from 'react';
import { projects } from '../data'; // Nosso banco de dados local!

function Projects() {
  return (

    <section id="projetos" className="py-20 px-6 max-w-6xl mx-auto">
      
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="text-blue-500">#</span> Projetos em Destaque
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {projects.map((projeto) => (
          <div 
            key={projeto.id} 
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 group shadow-lg shadow-slate-900/50"
          >
            
            {/* Cabeçalho do Cartão */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                  {projeto.type}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                  {projeto.title}
                </h3>
              </div>
            </div>

            {/* Descrição do Projeto */}
            <p className="text-slate-400 leading-relaxed mb-8">
              {projeto.description}
            </p>

            {/* Tecnologias Usadas */}
            <div className="flex flex-wrap gap-2 mb-8">
              {projeto.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Botões de Link */}
            <div className="flex gap-4 mt-auto">
              {projeto.link !== "#" ? (
                <a 
                  href={projeto.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-blue-600/10 text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors border border-blue-600/30"
                >
                  Ver no GitHub
                </a>
              ) : (
                <span className="px-5 py-2 border border-yellow-500/30 text-yellow-500/70 font-medium rounded-lg text-sm flex items-center gap-2 cursor-not-allowed">
                  🚧 Em Desenvolvimento
                </span>
              )}
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;