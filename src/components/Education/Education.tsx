import { education } from '../../data/education';
import './Education.css';

export const Education = () => {
  return (
    <section className="education">
      <div className="education-content">
        <h2 className="section-title">FORMATIONS</h2>
        
        <div className="education-grid">
          {education.map((item) => (
            <div key={item.id} className="education-card">
              <div className="education-card-header">
                <h3 className="education-degree">{item.degree}</h3>
                <span className="education-period">{item.period}</span>
              </div>
              
              <div className="education-details">
                <div className="school-info">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  <span className="school-name">{item.school}</span>
                </div>

                {item.level && (
                  <div className="education-level">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                    <span>{item.level}</span>
                  </div>
                )}

                {item.specialization && (
                  <div className="education-specialization">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span>{item.specialization}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};