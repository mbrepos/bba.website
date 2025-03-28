import React from 'react';
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
} from './styles';
import { FooterSection as FooterSectionType } from '../../types';

const Footer: React.FC = () => {
  const footerSections: FooterSectionType[] = [
    {
      title: 'About',
      links: [
        { label: 'Our Story', path: '/about' },
        { label: 'Team', path: '/about#team' },
        { label: 'Contact', path: '/contact' },
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
          path: 'https://medium.com/@Bentleyblockchain',
          external: true,
        },
      ],
    },
    {
      title: 'Community',
      links: [
        {
          label: 'Discord',
          path: 'https://discord.gg/7K2MAqYJrQ',
          external: true,
        },
        {
          label: 'Twitter',
          path: 'https://twitter.com/BentleyBBA',
          external: true,
        },
        {
          label: 'LinkedIn',
          path: 'https://www.linkedin.com/company/bentley-blockchain-association/',
          external: true,
        },
      ],
    },
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
        </FooterContent>
        <FooterBottom>
          <p>{new Date().getFullYear()} "©" Bentley Blockchain Association. All rights reserved.</p>
        </FooterBottom>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default Footer;