import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons';
import theme from '../../styles/theme'; // Adjust path based on your project structure

export const TeamCardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const TeamCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium || '12px'};
  box-shadow: ${theme.boxShadows.small || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  transition: transform ${theme.transitions.medium || '0.3s ease'}, box-shadow ${theme.transitions.medium || '0.3s ease'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.boxShadows.medium || '0 6px 12px rgba(0, 0, 0, 0.15)'};
  }

  ${theme.mq?.sm || '@media (max-width: 768px)'} {
    padding: 1rem;
  }
`;

export const TeamCardImageContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const TeamCardPhoto = styled.img`
  width: 192px;
  height: 192px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${theme.colors.backgroundLight || '#f8f9fa'};
  transition: transform ${theme.transitions.medium || '0.3s ease'};

  ${TeamCardContent}:hover & {
    transform: scale(1.05);
  }

  ${theme.mq?.sm || '@media (max-width: 768px)'} {
    width: 160px;
    height: 160px;
  }

  ${theme.mq?.xs || '@media (max-width: 480px)'} {
    width: 140px;
    height: 140px;
  }
`;

export const TeamCardSocial = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 25%);
`;

export const LinkedInIcon = styled(SocialIcon)`
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
  box-shadow: ${theme.boxShadows.small || '0 2px 4px rgba(0, 0, 0, 0.1)'};
  transition: transform ${theme.transitions.medium || '0.3s ease'} !important;

  &:hover {
    transform: scale(1.1);
  }

  ${theme.mq?.sm || '@media (max-width: 768px)'} {
    width: 40px !important;
    height: 40px !important;
  }

  ${theme.mq?.xs || '@media (max-width: 480px)'} {
    width: 35px !important;
    height: 35px !important;
  }
`;

export const TeamCardInfo = styled.div`
  text-align: center;
  width: 100%;

  h3 {
    font-size: ${theme.fontSizes.large || '1.25rem'};
    font-weight: ${theme.fontWeights.semibold || '600'};
    color: ${theme.colors.text || '#333'};
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: ${theme.fontSizes.small || '0.875rem'};
    color: ${theme.colors.lightText || '#666'};
    margin: 0;
    line-height: 1.4;
  }

  ${theme.mq?.sm || '@media (max-width: 768px)'} {
    h3 {
      font-size: 1.125rem;
    }
    p {
      font-size: 0.8125rem;
    }
  }
`;