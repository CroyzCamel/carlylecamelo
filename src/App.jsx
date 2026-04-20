import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 bg-300">
      {/* 2. Nós "encaixamos" o componente aqui no topo! */}
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
      {/* A nossa próxima seção (Hero) vai entrar aqui embaixo depois */}
    </div>
  );
}

export default App;
