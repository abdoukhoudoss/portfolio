import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import { experiences } from '../../data/experience';
import './Experience.css';

export const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-content">
        <h2 className="section-title">EXPÉRIENCES PROFESSIONNELLES</h2>
        
        <div className="timeline">
          {experiences.map((experience) => (
            <div key={experience.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-position">{experience.position}</h3>
                  <span className="experience-company">{experience.company}</span>
                  <span className="experience-period">{experience.period}</span>
                </div>
                
                <div className="experience-responsibilities">
                  {experience.responsibilities.map((responsibility: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                    <div key={index} className="responsibility-item">
                      <div className="responsibility-bullet">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <p>{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};