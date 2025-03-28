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

// Main navbar container
export const NavbarContainer = styled.nav<NavbarProps>`
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  z-index: 1000;
  background-color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.white || 'white' : 'transparent'};
  color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.text || '#333333' : theme.colors.white || '#ffffff'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 1rem 0;
  ${({ isScrolled }) => isScrolled && 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'}
`;

// Inner container for content
export const NavbarInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Brand (logo) styling
export const Brand = styled('a')<{ to?: string }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text || '#333333'};
`;

export const LogoImg = styled.img`
  width: 125px;
  height: 50px;
`;

// Container for navigation links
export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
`;

// Individual navigation link
export const NavLink = styled.a<{ to?: string; isScrolled: boolean }>`
  font-size: 0.875rem;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.text || '#333333' : theme.colors.white || '#ffffff'};
  font-weight: 500;
  transition: color 0.2s ease;
  padding: 0.5rem 1rem;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary || '#144181'};
  }
  ${({ theme }) => theme.mq?.lg || '@media (max-width: 991px)'} {
    color: ${({ theme }) => theme.colors.text || '#333333'};
    padding: 0.75rem 1rem;
  }
`;

// Dropdown menu
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white || 'white'};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  min-width: 160px;
  display: none;
  z-index: 1000;
  ${({ theme }) => theme.mq?.lg || '@media (max-width: 991px)'} {
    box-shadow: none;
    border: none;
    padding: 0;
    background-color: transparent;
    position: static;
    display: block;
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
`;

// Dropdown toggle (title)
export const DropdownToggle = styled.div<NavLinkProps & DropdownProps>`
  font-size: 0.875rem;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.text || '#333333' : theme.colors.white || '#ffffff'};
  font-weight: 500;
  transition: color 0.2s ease;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 0.5rem 1rem;
  ${({ theme }) => theme.mq?.lg || '@media (max-width: 991px)'} {
    color: ${({ theme }) => theme.colors.text || '#333333'};
    padding: 0.75rem 1rem;
  }
`;

// Dropdown item
export const DropdownItem = styled.a<{ to?: string }>`
  display: block;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text || '#333333'};
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundLight || '#f8f9fa'};
    color: ${({ theme }) => theme.colors.primary || '#144181'};
  }
  ${({ theme }) => theme.mq?.lg || '@media (max-width: 991px)'} {
    padding: 0.75rem 2rem;
  }
`;

// Mobile menu toggle
export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${({ theme }) => theme.mq?.lg || '@media (max-width: 991px)'} {
    display: block;
  }
`;

// Hamburger icon for mobile toggle
export const MenuIcon = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.text || '#333333'};
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text || '#333333'};
  }
  &:before {
    top: -8px;
  }
  &:after {
    bottom: -8px;
  }
`;

// Collapsible navigation for mobile
export const NavCollapse = styled.div<{ isOpen: boolean }>`
  display: flex;
  ${({ theme }) => theme.mq?.lg || '@media (max-width: 991px)'} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white || 'white'};
    padding: 1rem 0;
  }
`;