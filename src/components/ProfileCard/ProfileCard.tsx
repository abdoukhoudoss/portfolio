import './ProfileCard.css';

export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h3>Profil Candidat</h3>
      </div>
      
      <div className="profile-card-content">
        <div className="profile-section">
          <h4>
            <span className="icon">🎯</span>
            Objectif
          </h4>
          <p>Développeur Web passionné recherchant une opportunité en tant que développeur Full Stack. Spécialisé dans les technologies modernes comme React et Node.js.</p>
        </div>

        <div className="profile-section">
          <h4>
            <span className="icon">📅</span>
            Disponibilité
          </h4>
          <ul className="profile-list">
            <li>Disponible immédiatement</li>
            <li>Toulouse et environs</li>
            <li>CDI / CDD / Freelance</li>
          </ul>
        </div>

        <div className="profile-section">
          <h4>
            <span className="icon">💪</span>
            Atouts
          </h4>
          <ul className="profile-list">
            <li>Adaptabilité technique rapide</li>
            <li>Expérience en gestion d'équipe</li>
            <li>Créativité et innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};