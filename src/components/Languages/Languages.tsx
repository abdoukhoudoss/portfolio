import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { languages } from '../../data/language';
import './Languages.css';

export const Languages = () => {
  return (
    <section className="languages">
      <div className="languages-content">
        <h2 className="section-title">LANGUES</h2>
        
        <div className="languages-grid">
          {languages.map((language: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; level: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
            <div key={language.id} className="language-card">
              <div className="language-icon">
              
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              
              <div className="language-info">
                <h3 className="language-name">{language.name}</h3>
                <span className="language-level">{language.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};