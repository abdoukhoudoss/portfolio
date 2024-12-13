import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { interests } from '../../data/interests';
import './Interest.css';

export const Interests = () => {
  return (
    <section className="interests">
      <div className="interests-content">
        <h2 className="section-title">INTÉRÊTS</h2>
        
        <div className="interests-grid">
          {interests.map((interest: { id: Key | null | undefined; category: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; details: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
            <div key={interest.id} className="interest-card">
              <div className="interest-icon">
                {interest.category === "Technologie" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                )}
                {interest.category === "Lecture" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                )}
                {interest.category === "Bénévolat associatif" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )}
              </div>
              
              <div className="interest-content">
                <h3 className="interest-category">{interest.category}</h3>
                <p className="interest-details">{interest.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};