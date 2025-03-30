import React, { useState } from 'react';
import { TeamCardProps } from '../../types/index'; // Adjust path based on your project structure
import TeamCardModal from '../TeamCardModal/index'; // Adjust path if TeamCardModal is elsewhere
import {
  TeamCardContainer,
  TeamCardContent,
  TeamCardImageContainer,
  TeamCardPhoto,
  TeamCardSocial,
  LinkedInIcon,
  TeamCardInfo,
} from './styles';

const TeamCard: React.FC<TeamCardProps> = ({ name, title, icon, linkedin }) => {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <TeamCardContainer>
        <TeamCardContent onClick={() => setShowModal(true)}>
          <TeamCardImageContainer>
            <TeamCardPhoto src={icon} alt={`${name} - ${title}`} />
            <TeamCardSocial>
              <LinkedInIcon
                url={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                bgColor="white"
                fgColor="#0a61b8"
              />
            </TeamCardSocial>
          </TeamCardImageContainer>
          <TeamCardInfo>
            <h3>{name}</h3>
            <p>{title}</p>
          </TeamCardInfo>
        </TeamCardContent>
        <TeamCardModal
          show={showModal}
          onHide={() => setShowModal(false)}
          name={name}
          title={title}
        />
      </TeamCardContainer>
    );
  };
  
  export { TeamCard };
  export default TeamCard;