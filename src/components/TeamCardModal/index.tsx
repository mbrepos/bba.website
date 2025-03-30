import React from 'react';
import { Modal } from 'react-bootstrap';
import { TeamCardModalProps } from '../../types'; // Corrected path
import {
  StyledModal,
  TeamModalContent,
  TeamModalImage,
  ProfileImage,
  TeamModalInfo,
  StyledCloseButton,
} from './styles';

const TeamCardModal: React.FC<TeamCardModalProps> = ({
  show,
  onHide,
  name,
  title,
  bio,
  image,
}) => {
  const defaultBio = `As a key member of the Bentley Blockchain Association, ${name} brings valuable expertise and passion to our organization. In the role of ${title}, they contribute significantly to our mission of advancing blockchain education and innovation at Bentley University.`;

  return (
    <StyledModal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="team-member-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="team-member-modal">Team Member Profile</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <TeamModalContent>
          {image && (
            <TeamModalImage>
              <ProfileImage src={image} alt={`${name} - ${title}`} />
            </TeamModalImage>
          )}
          <TeamModalInfo>
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>{bio || defaultBio}</p>
          </TeamModalInfo>
        </TeamModalContent>
      </Modal.Body>

      <Modal.Footer>
        <StyledCloseButton variant="secondary" onClick={onHide}>
          Close
        </StyledCloseButton>
      </Modal.Footer>
    </StyledModal>
  );
};

export { TeamCardModal };
export default TeamCardModal;