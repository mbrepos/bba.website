import styled from '@emotion/styled';

// Container for the entire about page
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

// Content wrapper
export const AboutContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing?.xxl || '5rem'}; /* Add top padding to push content below navbar */
`;

// Header section
export const AboutHeader = styled.div`
  text-align: center;
  margin: 2rem 0 ${({ theme }) => theme.spacing.xl};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.white};
  }
`;

// Landing section styles
export const AboutLanding = styled.div`
  display: flex;
  min-height: 60vh;
  background-size: cover;
  background-position: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing?.lg || '2rem'};
  
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    min-height: auto;
    padding: 0.5rem 0.5rem;
  }
`;

export const Block = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    flex-direction: column;
    text-align: center;
  }
`;

export const WelcomeText = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes?.large || '1.25rem'};
`;

export const BlockHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes?.xxlarge || '2.5rem'};
  text-shadow: 
    1px 1px 2px rgba(0, 0, 0, 0.6),
    0px 0px 8px rgba(0, 0, 0, 0.5);
    
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    font-size: 2rem;
  }
  
  ${({ theme }) => theme.mq?.sm || '@media (max-width: 768px)'} {
    font-size: 1.75rem;
  }
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const BlockImage = styled.img`
  max-width: 100%;
  height: auto;
  flex: 1;
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    max-width: 80%;
  }
`;

// Falcon section styles
export const FalconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.xxl || '5rem'} ${({ theme }) => theme.spacing?.lg || '2rem'};
  gap: 3rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
  }
`;

export const FalconContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 450px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    width: 100%;
    max-width: 450px;
  }
`;

export const FalconImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

export const FalconText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  padding: 1rem 0;
  max-width: 500px;
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes?.xlarge || '1.75rem'};
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    
    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes?.medium || '1rem'};
    line-height: ${({ theme }) => theme.lineHeights?.body || '1.6'};
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    text-align: center;
    padding: 1.5rem 0;
    
    h2:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

// Mission/Vision section
export const AboutDescriptionSection = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.spacing?.xxl || '5rem'} ${({ theme }) => theme.spacing?.lg || '2rem'};
  
  ${({ theme }) => theme.mq?.sm || '@media (max-width: 768px)'} {
    padding: 3rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes?.xxlarge || '2.5rem'};
  margin-bottom: ${({ theme }) => theme.spacing?.xl || '3rem'};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  
  ${({ theme }) => theme.mq?.md || '@media (max-width: 1024px)'} {
    font-size: 2rem;
  }
`;

export const DescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  ${({ theme }) => theme.mq?.sm || '@media (max-width: 768px)'} {
    grid-template-columns: 1fr;
  }
`;

export const DescriptionItem = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const OutlineButton = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius?.small || '4px'};
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;
