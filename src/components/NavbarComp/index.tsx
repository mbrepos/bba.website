import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/bbalogowhite.png'; // Adjusted path
import {
  NavbarContainer,
  NavbarInnerContainer,
  Brand,
  LogoImg,
  NavLinksContainer,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MenuToggle,
  MenuIcon,
  NavCollapse,
} from './styles';
import { NavItem as NavItemType } from '../../types'; // Adjusted path

const NavbarComp: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItemType[] = [
    {
      title: 'Community',
      items: [{ label: 'Join the Community', path: '/community' }],
    },
    {
      title: 'Students',
      items: [
        {
          label: 'Public Resources',
          path: 'https://bentley-blockchain-association.gitbook.io/bentley-blockchain-association/',
          external: true,
        },
        {
          label: 'BBA Medium Articles',
          path: 'https://medium.com/@Bentleyblockchain',
          external: true,
        },
      ],
    },
    {
      title: 'Incubator',
      disabled: true,
      items: [
        { label: 'Dashboard', path: '#' },
        { label: 'Learn More', path: '#' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavDropdown = (item: NavItemType) => (
    <Dropdown key={item.title} disabled={item.disabled}>
      <DropdownToggle isScrolled={isScrolled} disabled={item.disabled}>
        {item.title}
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu">
        {item.items?.map((subItem, index) =>
          subItem.external ? (
            <DropdownItem
              key={index}
              href={subItem.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {subItem.label}
            </DropdownItem>
          ) : (
            <DropdownItem key={index} as={Link} to={subItem.path}>
              {subItem.label}
            </DropdownItem>
          )
        )}
      </DropdownMenu>
    </Dropdown>
  );

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <NavbarInnerContainer>
        <Brand as={Link} to="/">
          <LogoImg src={Logo} alt="BBA Logo" />
        </Brand>
        <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon />
        </MenuToggle>
        <NavCollapse isOpen={isMenuOpen}>
          <NavLinksContainer>
            <NavLink as={Link} to="/" isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink as={Link} to="/about" isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink as={Link} to="/state" isScrolled={isScrolled}>
              State of Association
            </NavLink>
            <NavLink as={Link} to="/por" isScrolled={isScrolled}>
              Proof of Work
            </NavLink>
            <NavLink as={Link} to="/contact" isScrolled={isScrolled}>
              Contact
            </NavLink>
            {navItems.map(renderNavDropdown)}
          </NavLinksContainer>
        </NavCollapse>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default NavbarComp;