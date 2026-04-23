import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white p-6 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wider">
        <span className="text-blue-500">&lt;</span>
        Carlyle Camelo
        <span className="text-blue-500"> /&gt;</span>
      </div>

      <ul className="flex space-x-8 text-sm font-medium items-center">
        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
          <a href="https://github.com/CroyzCamel">Sobre mim</a>
        </li>
        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
          <a href="#projetos">Projetos</a>
        </li>
        <li className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transition-colors">
          Contato
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
