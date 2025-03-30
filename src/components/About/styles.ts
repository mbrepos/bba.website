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
