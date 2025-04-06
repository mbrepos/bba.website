import React from 'react';
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
  FalconText
} from './styles';

const About: React.FC = () => {
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
      <Footer />
    </AboutContainer>
  );
};

export default About;
