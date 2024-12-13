import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Information } from './components/Information/Information';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Interests } from './components/Interests/Interest';
import { Languages } from './components/Languages/Languages';
import { Awards } from './components/Awards/Awards';
import { Footer } from './components/Footer/Footer';
import './styles/global.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="app">
    
      <nav className="nav-fixed">
        <div className="nav-content">
          <a href="#home" onClick={handleScroll}>Accueil</a>
          <a href="#skills" onClick={handleScroll}>Compétences</a>
          <a href="#projects" onClick={handleScroll}>Projets</a>
          <a href="#experience" onClick={handleScroll}>Expériences</a>
          <a href="#education" onClick={handleScroll}>Formation</a>
        </div>
      </nav>

      <main className="main-content">
      
        <section id="home" className="section">
          <Header />
          <Information />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

      
        <section id="experience" className="section">
          <Experience />
        </section>

      
        <section id="education" className="section">
          <Education />
        </section>

       
        <div className="combined-section">
          <Languages />
          <Interests />
        </div>

        
        <section id="awards" className="section">
          <Awards />
        </section>
      </main>

    
      <Footer />
    </div>
  );
}

export default App;
