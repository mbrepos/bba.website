import React from 'react';
import TeamCard from '../TeamCard'; // Adjusted path
import Footer from '../Footer'; // Adjusted path
import { PartnerItemProps } from '../../types'; // Adjusted path
import {
  LandingWrapper,
  ElementWrapper,
  LandingTitle,
  LandingSubtitle,
  OutlineButton,
  GoalsWrapper,
  GoalsLeftContainer,
  GoalsText,
  GoalsButtons,
  DarkButton,
  OutlineDarkButton,
  DescriptionWrapper,
  DescriptionInnerWrapper,
  DescriptionHeader,
  AsciiHeader,
  DescriptionGrid,
  DescriptionItem,
  Highlight,
  Quote,
  TeamWrapper,
  TeamInnerContainer,
  TeamHeading,
  TeamFlexContainer,
  TeamRow,
  TeamCardContainer,
  PartnersWrapper,
  PartnersContainer,
  PartnerHeader,
  PartnerLogos,
  PartnerLink,
} from './styles';

// Image imports (adjusted paths)
import srcVector from '../../images/image.gif';
import partnerVectorRight from '../../images/partnerVectorRight.png';
import partnerVectorLeft from '../../images/partnerVectorLeft.png';
import BBALogoWhite from '../../images/bbalogowhite.png';
import polygonScatter from '../../images/polygon-scatter.svg';

// Clear Team Photo Imports (adjusted paths)
import nicclear from '../../images/png/nicclear.png';
import mikeclear from '../../images/png/mikeclear.png';
import samclear from '../../images/png/samclear.png';
import nilufarclear from '../../images/png/nilufarclear.png';
import chrisclear from '../../images/png/chrisclear.png';
import antonisclear from '../../images/png/antonisclear.png';
import javierclear from '../../images/png/javiclear.png';

// Partner Logo Imports (adjusted paths)
import hedera_logo from '../../images/hedera_logo.png';
import encode from '../../images/encode.png';
import coingecko from '../../images/coingecko.png';
import ben from '../../images/ben.png';
import thetie from '../../images/the_tie.png';
import baf from '../../images/baf.png';
import spawn from '../../images/spawn.png';

const Landing: React.FC = () => (
  <LandingWrapper>
    <ElementWrapper>
      <LandingTitle>Bentley Blockchain Association</LandingTitle>
      <LandingSubtitle>
        Shaping the Future of Blockchain Innovation, Education, and Technology at Bentley University
      </LandingSubtitle>
      <OutlineButton
        as="a"
        href="https://medium.com/@Bentleyblockchain"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </OutlineButton>
    </ElementWrapper>
  </LandingWrapper>
);

const Goals: React.FC = () => (
  <GoalsWrapper>
    <GoalsLeftContainer>
      <GoalsText>
        <h2>
          <span className="creating-inspiration">Creating Inspiration Through Blockchain Innovation</span>
        </h2>
      </GoalsText>
      <GoalsButtons>
        <DarkButton
          as="a"
          href="https://bentley-blockchain-association.gitbook.io/bentley-blockchain-association/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Resources
        </DarkButton>
        <OutlineDarkButton
          as="a"
          href="https://discord.gg/7K2MAqYJrQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord
        </OutlineDarkButton>
      </GoalsButtons>
    </GoalsLeftContainer>
  </GoalsWrapper>
);

const Description: React.FC = () => (
  <DescriptionWrapper>
    <DescriptionInnerWrapper>
      <DescriptionHeader>
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
      </DescriptionHeader>
      <DescriptionGrid>
        <DescriptionItem>
          <h2>Our Saga</h2>
          <p>
            The Bentley Blockchain Association (BBA) was founded in the Fall of 2022 by{' '}
            <Highlight>Alex Kim</Highlight> and <Highlight>Jordan Soifer</Highlight>. Since then, the
            BBA has evolved into a dynamic cohort of students committed to advancing the awareness and
            study of blockchain technology.
          </p>
        </DescriptionItem>
        <DescriptionItem>
          <h2>Our Vision</h2>
          <p>
            Our vision is to foster a limitless, think-tank where students from all walks of life can
            collaborate in pursuit of innovation, economic prosperity, and financial freedom.
            <br />
            <br />
            <Quote>"Innovation distinguishes between a leader and a follower." - Steve Jobs</Quote>
          </p>
        </DescriptionItem>
        <DescriptionItem>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower undergraduate students by providing them with opportunities to
            explore blockchain, decentralized finance (DeFi), and fintech-related fields. We aim to
            create an environment that equips students to become leaders in today's competitive
            business landscape.
          </p>
        </DescriptionItem>
      </DescriptionGrid>
    </DescriptionInnerWrapper>
  </DescriptionWrapper>
);

const Team: React.FC = () => (
  <TeamWrapper>
    <TeamInnerContainer>
      <TeamHeading>Executive Board Members</TeamHeading>
      <TeamFlexContainer>
        <TeamRow>
          <TeamCardContainer>
            <TeamCard
              name="Nicolas Saliou"
              title="Chairman"
              icon={nicclear}
              linkedin="https://www.linkedin.com/in/nicolas-saliou-744630251/"
            />
          </TeamCardContainer>
          <TeamCardContainer>
            <TeamCard
              name="Samuel Capobianco"
              title="President (Spring 2025)"
              icon={samclear}
              linkedin="https://www.linkedin.com/in/samuel-capobianco-13836622a/"
            />
          </TeamCardContainer>
        </TeamRow>
        <TeamRow>
        <TeamCardContainer>
            <TeamCard
              name="Mike Binder"
              title="Vice President, Technology"
              icon={mikeclear}
              linkedin="https://www.linkedin.com/in/m-binder/"
            />
          </TeamCardContainer>
        <TeamCardContainer>
            <TeamCard
              name="Javier Crisostomo"
              title="Vice President, Marketing"
              icon={javierclear}
              linkedin="https://www.linkedin.com/in/javicrisval/"
            />
          </TeamCardContainer>
          </TeamRow>
          <TeamRow>
          <TeamCardContainer>
            <TeamCard
              name="Antonis Moraitis"
              title="Blockchain Analyst"
              icon={antonisclear}
              linkedin="https://www.linkedin.com/in/antonismoraitis/"
            />
          </TeamCardContainer>
          <TeamCardContainer>
            <TeamCard
              name="Nilufar Noorian"
              title="Director of Technology"
              icon={nilufarclear}
              linkedin="https://www.linkedin.com/in/nilufar-noorian/"
            />
          </TeamCardContainer>
          <TeamCardContainer>
            <TeamCard
              name="Chris Guyette"
              title="Senior Advisor"
              icon={chrisclear}
              linkedin="https://www.linkedin.com/in/christopher-guyette/"
            />
          </TeamCardContainer>
        </TeamRow>
      </TeamFlexContainer>
    </TeamInnerContainer>
  </TeamWrapper>
);

const partnersData: PartnerItemProps[] = [
  { href: 'https://www.hedera.com/', src: hedera_logo, alt: 'Hedera Logo', invert: true },
  { href: 'https://www.blockchainedu.org/', src: ben, alt: 'BEN Logo' },
  { href: 'https://www.encode.club/', src: encode, alt: 'Encode Club Logo' },
  { href: 'https://www.coingecko.com/', src: coingecko, alt: 'CoinGecko Logo' },
  { href: 'https://www.thetie.io/', src: thetie, alt: 'The Tie Logo' },
  { href: 'https://www.blockchainacceleratorfoundation.com/', src: baf, alt: 'BAF Logo' },
  { href: 'https://www.spawn.com/', src: spawn, alt: 'Spawn Logo' },
];

const PartnerItem: React.FC<PartnerItemProps> = ({ href, src, alt, invert = false }) => (
  <PartnerLink href={href} target="_blank" rel="noopener noreferrer" invert={invert}>
    <img src={src} alt={alt} />
  </PartnerLink>
);

const Partners: React.FC = () => (
  <PartnersWrapper>
    <PartnersContainer>
      <PartnerHeader>
        <h1>Partners & Sponsors</h1>
      </PartnerHeader>
      <PartnerLogos>
        {partnersData.map((partner, index) => (
          <PartnerItem key={index} {...partner} />
        ))}
      </PartnerLogos>
    </PartnersContainer>
  </PartnersWrapper>
);

const Home: React.FC = () => (
  <div>
    <Landing />
    <Goals />
    <Description />
    <Team />
    <Partners />
    <Footer />
  </div>
);

export default Home;