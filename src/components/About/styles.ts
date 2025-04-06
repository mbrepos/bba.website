import styled from '@emotion/styled';

// Container for the entire about page
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Landing section styles
export const AboutLanding = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const Block = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const WelcomeText = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px;
  font-weight: bold;
  display: inline-block;
`;

export const BlockHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 2rem;
`;

export const BlockImage = styled.img`
  max-width: 100%;
  height: auto;
`;

// Falcon section styles
export const FalconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  background: #f5f5f5;
  
  ${({ theme }) => theme.mq.sm} {
    flex-direction: column;
    text-align: center;
  }
`;

export const FalconContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 450px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
  ${({ theme }) => theme.mq.sm} {
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
  padding: 2rem;
  max-width: 500px;
  
  ${({ theme }) => theme.mq.sm} {
    text-align: center;
    padding: 1rem;
  }
`;

// Description section styles (moved from Home)
export const AboutDescriptionSection = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: 4rem 2rem;
  
  ${({ theme }) => theme.mq.sm} {
    padding: 3rem 1rem;
  }
`;

export const DescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  ${({ theme }) => theme.mq.sm} {
    grid-template-columns: 1fr;
  }
`;

export const DescriptionItem = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
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

export const Quote = styled.blockquote`
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding-left: 1rem;
  margin-left: 0;
`;

// Social info section styles
export const SocialInfoSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
`;

export const SocialInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialWrapper = styled.div`
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledSocialIcon = styled.div`
  .social-icon {
    border-radius: 50%;
  }
`;
