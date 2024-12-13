import { personalInfo } from '../../data/personal';
import './Information.css';

export const Information = () => {
  return (
    <section className="information">
      <div className="information-content">
        <h2 className="section-title">INFORMATIONS</h2>
        <div className="information-text">
          {personalInfo.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};