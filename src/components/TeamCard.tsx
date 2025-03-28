import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { TeamCardProps } from '../types';
import TeamCardModal from './TeamCardModal';
import '../styles/teamcard.css';

const TeamCard: React.FC<TeamCardProps> = ({ name, title, icon, linkden }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="team-card">
      <div className="team-card-content">
        <div className="team-card-image-container">
          <img 
            className="team-card-photo" 
            src={icon} 
            alt={`${name} - ${title}`} 
          />
          <div className="team-card-social">
            <SocialIcon
              url={linkden}
              target="_blank"
              rel="noopener noreferrer"
              bgColor="white"
              fgColor="#0a61b8"
              className="linkedin-icon"
            />
          </div>
        </div>
        <div className="team-card-info">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
      
      <TeamCardModal
        show={showModal}
        onHide={() => setShowModal(false)}
        name={name}
        title={title}
      />
    </div>
  );
};

export { TeamCard };
export default TeamCard;
