// src/data.js

export const personalInfo = {
  name: "Carlyle Camelo",
  role: "Desenvolvedor Full-Stack & Android",
  about: "Estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia. Tenho experiência prática em desenvolvimento de interfaces web dinâmicas (Dashboards), consumo de APIs RESTful e criação de aplicativos Android nativos. Meu foco é construir interfaces limpas e arquiteturas sólidas, sempre buscando aprender e agregar valor às metas da empresa.",
  github: "https://github.com/CroyzCamel",
  linkedin: "https://linkedin.com/in/carlylecamelo", // Substitua pelo link real
  email: "carlylecamelo@gmail.com"
};

export const experiences = [
  {
    id: 1,
    title: "Desenvolvedor Fullstack Trainee",
    company: "Residência TIC-20 / AVANTI",
    period: "Jun 2024 - Jun 2025",
    description: "Atuação em ambiente corporativo simulando metodologias ágeis. Desenvolvimento Front-end de um Painel Administrativo (Dashboard) focado no controle interno e gestão de dados. Construção de interfaces dinâmicas, Data Tables com consumo de APIs RESTful (Node.js/SQL) e fluxos completos de CRUD e importação/exportação de CSV.",
    tags: ["JavaScript", "HTML/CSS", "Node.js", "SQL", "APIs RESTful", "Agile"]
  },
  {
    id: 2,
    title: "Desenvolvedor Android Nativo",
    company: "Routinely (Bolsista)",
    period: "Jan 2024 - Out 2025",
    description: "Desenvolvimento e manutenção de aplicativos Android nativos utilizando Kotlin e arquitetura de UI declarativa (Jetpack Compose). Implementação de novas regras de negócio, integração com APIs para consumo de dados e gerenciamento de Push Notifications via Firebase Cloud Messaging.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Scrum", "Mobile"]
  }
];

// Aqui nós também adicionaremos o projeto do Tec-Hidro que discutimos antes!
export const projects = [
  {
    id: 1,
    title: "Sistema de Gestão Operacional (Tec-Hidro)",
    type: "Full-Stack & BI",
    description: "Plataforma desenvolvida para gerenciar o fluxo de análises físico-químicas de sistemas. Inclui front-end responsivo para gestão operacional e separação de status de amostras (Backlog vs Concluído) baseado em regras de data de competência.",
    tags: ["React", "Tailwind CSS", "Integração de APIs", "Power BI"],
    link: "#" // Link do deploy quando existir
  },
  {
    id: 2,
    title: "Routinely Mobile",
    type: "Open Source / Corporativo",
    description: "Contribuição ativa no desenvolvimento de funcionalidades e manutenção do aplicativo Android nativo da organização Routinely.",
    tags: ["Kotlin", "Android", "GitHub Collaboration"],
    link: "https://github.com/RoutinelyOrganization/routinely-mobile"
  }
];