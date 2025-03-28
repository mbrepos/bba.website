import styled from '@emotion/styled';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import coverbg from '../../images/coverbg.png'; // Adjusted path

// Type for polymorphic components that can be buttons or anchors
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
};

type PolymorphicProps = ButtonProps | AnchorProps;

// Landing Section
export const LandingWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${coverbg});
  background-size: cover;
  background-position: center;
  align-items: center;
  width: 100%;
`;

export const ElementWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing?.lg || '2rem'};
  text-align: center;
  color: ${({ theme }) => theme.colors?.white || 'white'};
`;

export const LandingTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes?.xxxlarge || '3.5rem'};
  font-weight: ${({ theme }) => theme.fontWeights?.bold || 'bold'};
  margin-bottom: ${({ theme }) => theme.spacing?.lg || '1.5rem'};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    font-size: 3rem;
  }
  ${({ theme }) => theme.mq?.sm || '@media (max-width: 768px)'} {
    font-size: 2.5rem;
  }
  ${({ theme }) => theme.mq?.xs || '@media (max-width: 480px)'} {
    font-size: 2rem;
  }
`;

export const LandingSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes?.xlarge || '1.75rem'};
  margin-bottom: ${({ theme }) => theme.spacing?.lg || '2rem'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    font-size: 1.5rem;
  }
  ${({ theme }) => theme.mq?.sm || '@media (max-width: 768px)'} {
    font-size: 1.25rem;
  }
`;

export const OutlineButton = styled.button<PolymorphicProps>`
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors?.white || 'white'};
  border: 1px solid ${({ theme }) => theme.colors?.white || 'white'};
  background: transparent;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors?.white || 'white'};
    color: ${({ theme }) => theme.colors?.primary || '#000'};
  }
`;

// Goals Section
export const GoalsWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing?.xxl || '5rem'} ${({ theme }) => theme.spacing?.lg || '2rem'};
  background-color: ${({ theme }) => theme.colors?.backgroundLight || '#f8f9fa'};
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing?.xl || '4rem'};
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
  }
`;

export const GoalsLeftContainer = styled.div`
  max-width: 500px;
`;

export const GoalsText = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes?.xxlarge || '2.5rem'};
    margin-bottom: ${({ theme }) => theme.spacing?.lg || '2rem'};
    color: ${({ theme }) => theme.colors?.text || '#333'};
  }
`;

export const GoalsButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing?.md || '1rem'};
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    justify-content: center;
  }
  ${({ theme }) => theme.mq?.xs || '@media (max-width: 480px)'} {
    flex-direction: column;
  }
`;

export const DarkButton = styled.button<PolymorphicProps>`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors?.black || '#000'};
  color: ${({ theme }) => theme.colors?.white || 'white'};
  border: none;
  font-weight: bold;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const OutlineDarkButton = styled.button<PolymorphicProps>`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors?.black || '#000'};
  border: 1px solid ${({ theme }) => theme.colors?.black || '#000'};
  background: transparent;
  font-weight: bold;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors?.black || '#000'};
    color: ${({ theme }) => theme.colors?.white || 'white'};
  }
`;

// Description Section
export const DescriptionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors?.primary || '#144181'};
  padding: ${({ theme }) => theme.spacing?.xl || '4rem'} 0;
  color: ${({ theme }) => theme.colors?.white || 'white'};
`;

export const DescriptionInnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing?.lg || '2rem'};
`;

export const DescriptionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing?.xl || '3rem'};
  overflow-x: auto;
`;

export const AsciiHeader = styled.pre`
  font-family: monospace;
  white-space: pre;
  margin: 0;
  color: ${({ theme }) => theme.colors?.white || 'white'};
  font-size: ${({ theme }) => theme.fontSizes?.small || '0.75rem'};
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    font-size: 0.6rem;
  }
  ${({ theme }) => theme.mq?.xs || '@media (max-width: 480px)'} {
    font-size: 0.5rem;
  }
`;

export const DescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing?.lg || '2rem'};
`;

export const DescriptionItem = styled.div`
  padding: ${({ theme }) => theme.spacing?.lg || '2rem'};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  transition: transform ${({ theme }) => theme.transitions?.medium || '0.3s ease'};
  &:hover {
    transform: translateY(-5px);
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSizes?.xlarge || '1.75rem'};
    margin-bottom: ${({ theme }) => theme.spacing?.md || '1.5rem'};
    color: ${({ theme }) => theme.colors?.white || 'white'};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes?.medium || '1rem'};
    line-height: ${({ theme }) => theme.lineHeights?.body || '1.6'};
  }
  ${({ theme }) => theme.mq?.sm || '@media (max-width: 768px)'} {
    padding: 1.5rem;
  }
  ${({ theme }) => theme.mq?.xs || '@media (max-width: 480px)'} {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors?.info || '#007BFF'};
`;

export const Quote = styled.span`
  display: block;
  font-style: italic;
  color: ${({ theme }) => theme.colors?.info || '#007BFF'};
  margin-top: ${({ theme }) => theme.spacing?.md || '1rem'};
`;

// Team Section
export const TeamWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing?.xxl || '5rem'} ${({ theme }) => theme.spacing?.lg || '2rem'};
  background-color: ${({ theme }) => theme.colors?.backgroundLight || '#f8f9fa'};
`;

export const TeamInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TeamHeading = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes?.xxlarge || '2.5rem'};
  margin-bottom: ${({ theme }) => theme.spacing?.xl || '3rem'};
  color: ${({ theme }) => theme.colors?.text || '#333'};
`;

export const TeamFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg || '2rem'};
`;

export const TeamRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing?.lg || '2rem'};
  flex-wrap: wrap;
  ${({ theme }) => theme.mq?.sm || '@media (max-width: 768px)'} {
    gap: 1.5rem;
  }
`;

export const TeamCardContainer = styled.div`
  flex: 0 1 300px;
`;

// Partners Section
export const PartnersWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing?.xxl || '5rem'} ${({ theme }) => theme.spacing?.lg || '2rem'};
  background-color: ${({ theme }) => theme.colors?.white || 'white'};
`;

export const PartnersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PartnerHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing?.xl || '3rem'};
  h1 {
    font-size: ${({ theme }) => theme.fontSizes?.xxlarge || '2.5rem'};
    color: ${({ theme }) => theme.colors?.text || '#333'};
  }
`;

export const PartnerLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing?.lg || '2rem'};
  align-items: center;
  justify-items: center;
  ${({ theme }) => theme.mq?.sm || '@media (max-width: 768px)'} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const PartnerLink = styled.a<{ invert?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.md || '1rem'};
  transition: transform ${({ theme }) => theme.transitions?.medium || '0.3s ease'};
  &:hover {
    transform: scale(1.1);
  }
  img {
    max-width: 150px;
    height: auto;
    filter: ${({ invert }) => (invert ? 'invert(1) grayscale(100%)' : 'grayscale(100%)')};
    transition: filter ${({ theme }) => theme.transitions?.medium || '0.3s ease'};
    &:hover {
      filter: ${({ invert }) => (invert ? 'invert(1) grayscale(0%)' : 'grayscale(0%)')};
    }
  }
`;