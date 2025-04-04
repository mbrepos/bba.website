import styled from '@emotion/styled';
import { Modal, Button } from 'react-bootstrap';
import theme from '../../styles/theme'; // Adjust path based on your project structure

export const StyledModal = styled(Modal)`
  & .modal-content {
    border-radius: 12px;
    border: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  & .modal-header {
    border-bottom: 1px solid #eee;
    padding: 1.5rem;
  }
  & .modal-title {
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
  }
  & .modal-body {
    padding: 2rem;
    @media (max-width: 480px) {
      padding: 1.5rem;
    }
  }
  & .modal-footer {
    border-top: 1px solid #eee;
    padding: 1.25rem;
  }
`;

export const TeamModalContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const TeamModalImage = styled.div`
  flex: 0 0 200px;
  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TeamModalInfo = styled.div`
  flex: 1;
  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 1.5rem;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 0;
    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }
`;

export const StyledCloseButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors?.black || '#000'};
`;