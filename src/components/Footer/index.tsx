import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {
  FooterContainer,
  FooterInnerContainer,
  FooterContent,
  FooterSection,
  FooterHeading,
  FooterList,
  FooterListItem,
  FooterLink,
  FooterBottom,
  SocialLinks,
  SocialIconWrapper,
} from './styles';
import { FooterSection as FooterSectionType } from '../../types';

const Footer: React.FC = () => {
  const footerSections: FooterSectionType[] = [
    {
      title: 'Site Map',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Publications', path: '/publications' }
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          label: 'Public Resources',
          path: 'https://bentley-blockchain-association.gitbook.io/bentley-blockchain-association/',
          external: true,
        },
        {
          label: 'Medium Articles',
          path: 'https://medium.com/@Bentleyblockchain/',
          external: true,
        },
      ],
    },
  ];

  const socialLinks = [
    { url: 'https://discord.gg/7K2MAqYJrQ', network: 'discord' },
    { url: 'https://medium.com/@Bentleyblockchain', network: 'medium' },
    { url: 'https://www.linkedin.com/company/bentley-blockchain', network: 'linkedin' },
    { url: 'https://x.com/BentleyWeb3', network: 'x' },
    { url: 'https://github.com/mbrepos/bba.website', network: 'github' },
  ];

  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterContent>
          {footerSections.map((section: FooterSectionType, index: number) => (
            <FooterSection key={index}>
              <FooterHeading>{section.title}</FooterHeading>
              <FooterList>
                {section.links.map((link: { path: string; external?: boolean; label: string }, linkIndex: number) => (
                  <FooterListItem key={linkIndex}>
                    <FooterLink
                      href={link.path}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </FooterLink>
                  </FooterListItem>
                ))}
              </FooterList>
            </FooterSection>
          ))}
          <FooterSection>
            <FooterHeading></FooterHeading>
            <SocialLinks>
              {socialLinks.map((link, index) => (
                <SocialIconWrapper key={index}>
                  <SocialIcon
                    url={link.url}
                    network={link.network}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ height: 35, width: 35 }}
                  />
                </SocialIconWrapper>
              ))}
            </SocialLinks>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <p> &copy; {new Date().getFullYear()} Bentley Blockchain Association. All rights reserved.</p>
        </FooterBottom>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default Footer;