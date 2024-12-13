import './Profile.css';

export const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-container">
        <h2 className="section-title">PROFIL CANDIDAT</h2>
        
        <div className="profile-content">
          <div className="profile-section">
            <h3>Objectif Professionnel</h3>
            <p>
              Développeur Web passionné à la recherche d'une opportunité en tant que développeur Full Stack.
              Souhaitant mettre à profit mes compétences en React, Node.js et bases de données pour participer
              à des projets innovants et challengeants.
            </p>
          </div>

          <div className="profile-section">
            <h3>Points Forts</h3>
            <ul className="strengths-list">
              <li>
                <span className="strength-icon">🎯</span>
                <div className="strength-content">
                  <strong>Adaptabilité Technique</strong>
                  <p>Capacité à maîtriser rapidement de nouvelles technologies</p>
                </div>
              </li>
              <li>
                <span className="strength-icon">🤝</span>
                <div className="strength-content">
                  <strong>Travail d'Équipe</strong>
                  <p>Expérience en gestion d'équipe et collaboration</p>
                </div>
              </li>
              <li>
                <span className="strength-icon">💡</span>
                <div className="strength-content">
                  <strong>Innovation</strong>
                  <p>Approche créative dans la résolution de problèmes</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="profile-section">
            <h3>Disponibilité</h3>
            <div className="availability-info">
              <p>
                <span className="availability-icon">📅</span>
                Disponible à partir de MARS 2025
              </p>
              <p>
                <span className="availability-icon">🌍</span>
                Mobilité : Toute la France Métropolitaine
              </p>
              <p>
                <span className="availability-icon">💼</span>
                Type de contrat : CDI, CDD, Freelance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};