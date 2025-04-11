import React from 'react';
import Footer from '../Footer';
import { AsciiHeader } from '../Home/styles';
import { 
  AboutContainer,
  AboutContent, 
  AboutHeader,
  AboutLanding, 
  Block, 
  TextContent,
  BlockHeading,
  OutlineButton,
  FalconSection,
  FalconContainer,
  FalconImage,
  FalconText,
  Highlight
} from './styles';
import { Link } from 'react-router-dom';
import BBALogoWhite from '../../images/bbalogowhite.png';

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutHeader>
          <h1>About Us</h1>
          <p>Join our community and help us shape the future of blockchain and digital currency at Bentley University</p>
        </AboutHeader>
        
        <AboutLanding>
          <Block>
            <AsciiHeader>
            {`  ____                   _     _                                           
 | __ )    ___   _ __   | |_  | |   ___   _   _                            
 |  _ \\   / _ \\ | '_ \\  | __| | |  / _ \\ | | | |                           
 | |_) | |  __/ | | | | | |_  | | |  __/ | |_| |                           
 |____/   \\___| |_| |_|  \\__| |_|  \\___|  \\__, |                           
  ____    _                  _            |___/            _               
 | __ )  | |   ___     ___  | | __   ___  | |__     __ _  (_)  _ __        
 |  _ \\  | |  / _ \\   / __| | |/ /  / __| | '_ \\   / _\` | | | | '_ \\       
 | |_) | | | | (_) | | (__  |      | (__  | | | | | (_| | | | | | | |      
 |____/  |_|  \\___/   \\___| |_|\\_\\  \\___| |_| |_|  \\__ _|_|_| |_| |_|      

    / \\     ___   ___    ___     ___  (_)   __ _  | |_  (_)   ___    _ __  
   / _ \\   / __| / __|  / _ \\   / __| | |  / _\` | | __| | |  / _ \\  | '_ \\ 
  / ___ \\  \\__ \\ \\__ \\ | (_) | | (__  | | | (_| | | |_  | | | (_) | | | | |
 /_/   \\_\\ |___/ |___/  \\___/   \\___| |_|  \\__ _|  \\__| |_|  \\___/  |_| |_|`}
            </AsciiHeader>
            <TextContent>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                <OutlineButton
                  as="a"
                  href="https://discord.gg/7K2MAqYJrQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord
                </OutlineButton>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <OutlineButton>
                    Contact Us
                  </OutlineButton>
                </Link>
              </div>
            </TextContent>
          </Block>
        </AboutLanding>
        
        <FalconSection>
          <FalconContainer>
            <FalconImage src={BBALogoWhite} alt="BBA Logo" />
          </FalconContainer>
          <FalconText>
            <h2>Our Organization</h2>
            <p>
              The <Highlight>Bentley Blockchain Association</Highlight> is a student-led organization 
              dedicated to fostering a vibrant community of blockchain enthusiasts, educators, and 
              innovators at Bentley University. We bring together students passionate about blockchain, 
              distributed ledger technology, and decentralized finance.
            </p>
            <p>
              Join our <strong>amazing</strong> network of developers, students,
              alumni and investors. We are the most vibrant blockchain education
              community existing at the university level.
            </p>
            <OutlineButton
              as="a"
              href="https://bentley-blockchain-association.gitbook.io/bentley-blockchain-association/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Resources
            </OutlineButton>
          </FalconText>
        </FalconSection>
      </AboutContent>
      <Footer />
    </AboutContainer>
  );
};

export default About;
