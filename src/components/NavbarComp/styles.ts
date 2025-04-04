import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

interface NavbarProps {
  isScrolled: boolean;
}

interface NavLinkProps {
  isScrolled: boolean;
}

interface DropdownProps {
  disabled?: boolean;
}

interface NavCollapseProps {
  isOpen: boolean;
}

// Main navbar container
export const NavbarContainer = styled('nav', {
  shouldForwardProp: (propName: string) => propName !== 'isScrolled',
})<NavbarProps & { theme: Theme }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndices.navbar};
  background-color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.primary : 'transparent')};
  color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.white : theme.colors.white)};
  transition: ${({ theme }) => theme.transitions.medium};
  padding: 1rem 0;
  ${({ isScrolled, theme }) => isScrolled && `box-shadow: ${theme.boxShadows.small};`}
  
  ${({ theme }) => theme.mq.sm} {
    padding: 0.75rem 0;
  }
`;

// Inner container for content
export const NavbarInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${({ theme }) => theme.mq.sm} {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

// Brand (logo) styling
export const Brand = styled('a')<{ to?: string }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  z-index: ${({ theme }) => theme.zIndices.navbar + 1};
  position: relative;
`;

export const LogoImg = styled.img`
  width: 125px;
  height: 50px;
  

  ${({ theme }) => theme.mq.sm} {
    width: 100px;
    height: 40px;
  }
`;

// Container for navigation links
export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
  

  ${({ theme }) => theme.mq.lg} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0;
  }
`;

// Individual navigation link
export const NavLink = styled.a<{ to?: string; isScrolled: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: color ${({ theme }) => theme.transitions.fast};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  
  &:hover {
  opacity: 0.9;
  }
  

  ${({ theme }) => theme.mq.lg} {
  
    color: ${({ theme }) => theme.colors.text};
  
    padding: ${({ theme }) => theme.spacing.md};
    width: 100%;
  
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    
    &:first-of-type {
    
      border-top: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    }
  }
`;

// Dropdown menu
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.borderRadius.medium};

  box-shadow: ${({ theme }) => theme.boxShadows.medium};

  padding: ${({ theme }) => theme.spacing.sm} 0;
  min-width: 200px;
  display: none;

  z-index: ${({ theme }) => theme.zIndices.navbar + 5};
  

  ${({ theme }) => theme.mq.lg} {
    box-shadow: none;
    border: none;
    padding: 0;
    background-color: transparent;
    position: static;
    display: block;
    width: 100%;
    min-width: unset;
  }
`;

// Dropdown container
export const Dropdown = styled.div<DropdownProps>`
  position: relative;
  display: inline-block;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  
  &:hover .dropdown-menu {
    display: block;
  }
  

  ${({ theme }) => theme.mq.lg} {
    width: 100%;
    display: block;
  }
`;

// Dropdown toggle (title)
export const DropdownToggle = styled.div<NavLinkProps & DropdownProps>`

  font-size: ${({ theme }) => theme.fontSizes.small};

  color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.white : theme.colors.white};

  font-weight: ${({ theme }) => theme.fontWeights.medium};

  transition: color ${({ theme }) => theme.transitions.fast};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  

  ${({ theme }) => theme.mq.lg} {
  
    color: ${({ theme }) => theme.colors.text};
  
    padding: ${({ theme }) => theme.spacing.md};
    width: 100%;
  
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    position: relative;
    
    &::after {
      content: '▼';
      position: absolute;
    
      right: ${({ theme }) => theme.spacing.md};
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.7rem;
    }
  }
`;

// Dropdown item
export const DropdownItem = styled.a<{ to?: string }>`
  display: block;

  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};

  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  }
  

  ${({ theme }) => theme.mq.lg} {
  
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    white-space: normal;
  
    font-size: ${({ theme }) => theme.fontSizes.small};
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

// Mobile menu toggle
export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;

  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  z-index: ${({ theme }) => theme.zIndices.navbar + 1};
  position: relative;
  
  &:focus {
    outline: none;
  }
  

  ${({ theme }) => theme.mq.lg} {
    display: block;
  }
`;

// Hamburger icon for mobile toggle
export const MenuIcon = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  transition: ${({ theme }) => theme.transitions.fast};
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
  
    transition: ${({ theme }) => theme.transitions.fast};
  }
  
  &:before {
    top: -8px;
  }
  
  &:after {
    bottom: -8px;
  }
`;

// Collapsible navigation for mobile
export const NavCollapse = styled.div<NavCollapseProps>`
  display: flex;
  

  ${({ theme }) => theme.mq.lg} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
  
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0;
  
    box-shadow: ${({ theme }) => theme.boxShadows.medium};
    max-height: ${({ isOpen }) => (isOpen ? '80vh' : '0')};
    overflow-y: auto;
  
    transition: max-height ${({ theme }) => theme.transitions.medium};
  }
`;

export const Nav = styled('nav', {
  shouldForwardProp: (propName: string) => propName !== 'isScrolled',
})<NavbarProps & { theme: Theme }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndices.navbar};
  background-color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.primary : 'transparent')};
  color: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.white : theme.colors.white)};
  transition: ${({ theme }) => theme.transitions.medium};
  padding: 1rem 0;
  ${({ isScrolled, theme }) => isScrolled && `box-shadow: ${theme.boxShadows.small};`}
  
  ${({ theme }) => theme.mq.sm} {
    padding: 0.75rem 0;
  }
`;