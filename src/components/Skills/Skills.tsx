
import { technicalSkills, softSkills } from '../../data/skills';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import './Skills.css';

export const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-cards">
          <div className="skill-card">
            <h2 className="section-title">SKILLS</h2>
            <div className="technical-skills">
              {technicalSkills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h2 className="section-title">SOFT SKILLS</h2>
            <div className="soft-skills">
              {softSkills.map((skill) => (
                <div key={skill.id} className="soft-skill-item">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <ProfileCard />
      </div>
    </section>
  );
};