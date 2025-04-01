import styled from '@emotion/styled';

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
export const NavbarContainer = styled.nav<NavbarProps>`
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  // @ts-ignore: Using theme from emotion
  z-index: ${({ theme }) => theme.zIndices.navbar};
  // @ts-ignore: Using theme from emotion
  background-color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.white : 'transparent'};
  // @ts-ignore: Using theme from emotion
  color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.text : theme.colors.white};
  // @ts-ignore: Using theme from emotion
  transition: ${({ theme }) => theme.transitions.medium};
  padding: 1rem 0;
  // @ts-ignore: Using theme from emotion
  ${({ isScrolled, theme }) => isScrolled && `box-shadow: ${theme.boxShadows.small};`}
  
  // @ts-ignore: Using theme from emotion
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
  
  // @ts-ignore: Using theme from emotion
  ${({ theme }) => theme.mq.sm} {
    // @ts-ignore: Using theme from emotion
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

// Brand (logo) styling
export const Brand = styled('a')<{ to?: string }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  // @ts-ignore: Using theme from emotion
  color: ${({ theme }) => theme.colors.text};
  // @ts-ignore: Using theme from emotion
  z-index: ${({ theme }) => theme.zIndices.navbar + 1};
  position: relative;
`;

export const LogoImg = styled.img`
  width: 125px;
  height: 50px;
  
  // @ts-ignore: Using theme from emotion
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
  
  // @ts-ignore: Using theme from emotion
  ${({ theme }) => theme.mq.lg} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0;
  }
`;

// Individual navigation link
export const NavLink = styled.a<{ to?: string; isScrolled: boolean }>`
  // @ts-ignore: Using theme from emotion
  font-size: ${({ theme }) => theme.fontSizes.small};
  // @ts-ignore: Using theme from emotion
  color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.text : theme.colors.white};
  // @ts-ignore: Using theme from emotion
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  // @ts-ignore: Using theme from emotion
  transition: color ${({ theme }) => theme.transitions.fast};
  // @ts-ignore: Using theme from emotion
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  
  &:hover {
    // @ts-ignore: Using theme from emotion
    color: ${({ theme }) => theme.colors.primary};
  }
  
  // @ts-ignore: Using theme from emotion
  ${({ theme }) => theme.mq.lg} {
    // @ts-ignore: Using theme from emotion
    color: ${({ theme }) => theme.colors.text};
    // @ts-ignore: Using theme from emotion
    padding: ${({ theme }) => theme.spacing.md};
    width: 100%;
    // @ts-ignore: Using theme from emotion
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    
    &:first-of-type {
      // @ts-ignore: Using theme from emotion
      border-top: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    }
  }
`;

// Dropdown menu
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  // @ts-ignore: Using theme from emotion
  background-color: ${({ theme }) => theme.colors.white};
  // @ts-ignore: Using theme from emotion
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  // @ts-ignore: Using theme from emotion
  box-shadow: ${({ theme }) => theme.boxShadows.medium};
  // @ts-ignore: Using theme from emotion
  padding: ${({ theme }) => theme.spacing.sm} 0;
  min-width: 200px;
  display: none;
  // @ts-ignore: Using theme from emotion
  z-index: ${({ theme }) => theme.zIndices.navbar + 5};
  
  // @ts-ignore: Using theme from emotion
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
  
  // @ts-ignore: Using theme from emotion
  ${({ theme }) => theme.mq.lg} {
    width: 100%;
    display: block;
  }
`;

// Dropdown toggle (title)
export const DropdownToggle = styled.div<NavLinkProps & DropdownProps>`
  // @ts-ignore: Using theme from emotion
  font-size: ${({ theme }) => theme.fontSizes.small};
  // @ts-ignore: Using theme from emotion
  color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.text : theme.colors.white};
  // @ts-ignore: Using theme from emotion
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  // @ts-ignore: Using theme from emotion
  transition: color ${({ theme }) => theme.transitions.fast};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  // @ts-ignore: Using theme from emotion
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  
  // @ts-ignore: Using theme from emotion
  ${({ theme }) => theme.mq.lg} {
    // @ts-ignore: Using theme from emotion
    color: ${({ theme }) => theme.colors.text};
    // @ts-ignore: Using theme from emotion
    padding: ${({ theme }) => theme.spacing.md};
    width: 100%;
    // @ts-ignore: Using theme from emotion
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    position: relative;
    
    &::after {
      content: '▼';
      position: absolute;
      // @ts-ignore: Using theme from emotion
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
  // @ts-ignore: Using theme from emotion
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  // @ts-ignore: Using theme from emotion
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  white-space: nowrap;
  
  &:hover {
    // @ts-ignore: Using theme from emotion
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    // @ts-ignore: Using theme from emotion
    color: ${({ theme }) => theme.colors.primary};
  }
  
  // @ts-ignore: Using theme from emotion
  ${({ theme }) => theme.mq.lg} {
    // @ts-ignore: Using theme from emotion
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    // @ts-ignore: Using theme from emotion
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};
    white-space: normal;
    // @ts-ignore: Using theme from emotion
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
  // @ts-ignore: Using theme from emotion
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  // @ts-ignore: Using theme from emotion
  z-index: ${({ theme }) => theme.zIndices.navbar + 1};
  position: relative;
  
  &:focus {
    outline: none;
  }
  
  // @ts-ignore: Using theme from emotion
  ${({ theme }) => theme.mq.lg} {
    display: block;
  }
`;

// Hamburger icon for mobile toggle
export const MenuIcon = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background-color: currentColor;
  position: relative;
  // @ts-ignore: Using theme from emotion
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: currentColor;
    // @ts-ignore: Using theme from emotion
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
  
  // @ts-ignore: Using theme from emotion
  ${({ theme }) => theme.mq.lg} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    // @ts-ignore: Using theme from emotion
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0;
    // @ts-ignore: Using theme from emotion
    box-shadow: ${({ theme }) => theme.boxShadows.medium};
    max-height: ${({ isOpen }) => (isOpen ? '80vh' : '0')};
    overflow-y: auto;
    // @ts-ignore: Using theme from emotion
    transition: max-height ${({ theme }) => theme.transitions.medium};
  }
`;