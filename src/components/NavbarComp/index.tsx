import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import theme from '../../styles/theme';

const NavbarComp: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItemType[] = [
    {
      title: 'Community',
      items: [{ label: 'Discord', path: 'https://discord.gg/7K2MAqYJrQ', external: true }],
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
      disabled: false,
      items: [
        { label: 'Dashboard', path: '../Construction' },
        { label: 'Learn More', path: '../Construction' },
      ],
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
    <NavbarContainer isScrolled={isScrolled} theme={theme}>
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
            <NavLink as={Link} to="/contact" isScrolled={isScrolled}>
              Contact
            </NavLink>
            <NavLink as={Link} to="/publications" isScrolled={isScrolled}>
              Publications
            </NavLink>
            {navItems.map(renderNavDropdown)}
          </NavLinksContainer>
        </NavCollapse>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default NavbarComp;