import styled from '@emotion/styled';

// Main footer container
export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundLight || '#f8f9fa'};
  padding: ${({ theme }) => theme.spacing.xxl || '4rem'} 0;
  margin-top: auto;
`;

// Inner container (replaces react-bootstrap Container)
export const FooterInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md || '1rem'};
`;

// Content wrapper for footer sections
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg || '2rem'};
  justify-content: center;

  ${({ theme }) => theme.mq?.md || '@media (max-width: 768px)'} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: ${({ theme }) => theme.spacing.md || '1.5rem'};
    text-align: center;
  }

  ${({ theme }) => theme.mq?.sm || '@media (max-width: 480px)'} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg || '2rem'};
  }
`;

// Individual footer section (e.g., About, Resources)
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.mq?.md || '@media (max-width: 768px)'} {
    align-items: center;
  }
`;

// Footer section heading
export const FooterHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large || '1.25rem'};
  font-weight: ${({ theme }) => theme.fontWeights.semibold || 600};
  color: ${({ theme }) => theme.colors.text || '#333'};
  margin: 0;
  transition: color ${({ theme }) => theme.transitions?.fast || '0.2s ease'};

  &:hover {
    opacity: 0.9;
  }
`;

// List for footer links
export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// List item for footer links
export const FooterListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm || '0.5rem'};
`;

// Footer link styling
export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.lightText || '#666'};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.small || '0.875rem'};
  transition: color ${({ theme }) => theme.transitions?.fast || '0.2s ease'};
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs || '0.25rem'} 0;

  &:hover {
    opacity: 0.9;
  }
`;

// Social links container
export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md || '1rem'};
  margin-top: ${({ theme }) => theme.spacing.sm || '0.5rem'};
  flex-wrap: wrap;
  justify-content: flex-start;

  ${({ theme }) => theme.mq?.md || '@media (max-width: 768px)'} {
    justify-content: center;
  }
`;

// Social icon wrapper // &;hove transform: scale(1.1);)
export const SocialIconWrapper = styled.div`
  transition: transform ${({ theme }) => theme.transitions?.fast || '0.2s ease'};

  &:hover {
    transform: translateY(-3px) scale(1.1);
  }
`;



// Bottom section for copyright
export const FooterBottom = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl || '2rem'};
  color: ${({ theme }) => theme.colors.lightText || '#666'};
  font-size: ${({ theme }) => theme.fontSizes.small || '0.875rem'};
`;