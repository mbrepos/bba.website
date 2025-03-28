import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { TeamCardModalProps } from '../types';
import '../styles/teamcardmodal.css';

const TeamCardModal: React.FC<TeamCardModalProps> = ({
  show,
  onHide,
  name,
  title,
  bio,
  image
}) => {
  const defaultBio = `As a key member of the Bentley Blockchain Association, ${name} brings valuable expertise and passion to our organization. In the role of ${title}, they contribute significantly to our mission of advancing blockchain education and innovation at Bentley University.`;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="team-member-modal"
      centered
      className="team-card-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="team-member-modal">Team Member Profile</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="team-modal-body">
        <div className="team-modal-content">
          {image && (
            <div className="team-modal-image">
              <img src={image} alt={`${name} - ${title}`} className="profile-image" />
            </div>
          )}
          <div className="team-modal-info">
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>{bio || defaultBio}</p>
          </div>
        </div>
      </Modal.Body>
      
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={onHide}
          className="modal-close-button"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { TeamCardModal };
export default TeamCardModal;
