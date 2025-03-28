import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Footer from '../Footer';
import abstract from '../../images/abstractabout.png';
import randomFalcon from '../../images/white.png';
import {
  AboutContainer,
  AboutLanding,
  Block,
  WelcomeText,
  BlockHeading,
  BlockImage,
  FalconSection,
  FalconContainer,
  FalconImage,
  FalconText,
  SocialInfoSection,
  SocialInfoElement,
  SocialWrapper,
  StyledSocialIcon
} from './styles';

const About: React.FC = () => {
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/company/bentley-blockchain/',
      label: 'LinkedIn',
    },
    {
      url: 'https://t.me/bentleyblockchain',
      label: 'Telegram',
    },
    {
      url: 'https://medium.com/@Bentleyblockchain',
      label: 'Medium',
    },
  ];

  return (
    <AboutContainer>
      <AboutLanding>
        <Block>
          <BlockHeading>
            <WelcomeText>Welcome!</WelcomeText>
            <br />
            <br />
            Join our Community, today!
          </BlockHeading>
          <BlockImage src={abstract} alt="Abstract background" />
        </Block>
      </AboutLanding>
      
      <FalconSection>
        <FalconContainer>
          <FalconImage src={randomFalcon} alt="Falcon logo" />
        </FalconContainer>
        <FalconText>
          <p>
            Join our <strong>amazing</strong> network of developers, students,
            alumni and investors. We are the most vibrant blockchain education
            community existing at the university level.
          </p>
        </FalconText>
      </FalconSection>

      <SocialInfoSection>
        {socialLinks.map((link, index) => (
          <SocialInfoElement key={index}>
            <SocialWrapper>
              <StyledSocialIcon>
                <SocialIcon
                  url={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ padding: '100px' }}
                  label={link.label}
                />
              </StyledSocialIcon>
            </SocialWrapper>
          </SocialInfoElement>
        ))}
      </SocialInfoSection>
      
      <Footer />
    </AboutContainer>
  );
};

export default About;
