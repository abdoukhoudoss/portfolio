import { awards } from '../../data/awards';
import './Awards.css';

export const Awards = () => {
  return (
    <section className="awards">
      <div className="awards-content">
        <h2 className="section-title">DISTINCTIONS</h2>
        
        <div className="awards-container">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <div className="award-icon">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              
              <div className="award-info">
                <div className="award-header">
                  <h3 className="award-title">
                    Prix "{award.title}"
                  </h3>
                  <span className="award-year">{award.year}</span>
                </div>
                
                <div className="award-organization">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span>{award.organization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};