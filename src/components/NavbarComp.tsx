import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../images/bbalogowhite.png';
import { NavItem } from '../types';
import '../styles/navbar.css';

const NavbarComp: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    {
      title: 'Community',
      items: [
        { label: 'Join the Community', path: '/community' }
      ]
    },
    {
      title: 'Students',
      items: [
        { 
          label: 'Public Resources', 
          path: 'https://bentley-blockchain-association.gitbook.io/bentley-blockchain-association/',
          external: true 
        },
        { 
          label: 'BBA Medium Articles', 
          path: 'https://medium.com/@Bentleyblockchain',
          external: true 
        }
      ]
    },
    {
      title: 'Incubator',
      disabled: true,
      items: [
        { label: 'Dashboard', path: '#' },
        { label: 'Learn More', path: '#' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavDropdown = (item: NavItem) => (
    <NavDropdown
      key={item.title}
      title={
        <span className={isScrolled ? 'nav-drop-down-dark' : 'nav-drop-down-light'}>
          {item.title}
        </span>
      }
      id={`nav-dropdown-${item.title.toLowerCase()}`}
      disabled={item.disabled}
    >
      {item.items?.map((subItem, index) => (
        subItem.external ? (
          <NavDropdown.Item
            key={index}
            href={subItem.path}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            {subItem.label}
          </NavDropdown.Item>
        ) : (
          <NavDropdown.Item 
            key={index} 
            as={Link} 
            to={subItem.path}
            className="nav-link"
          >
            {subItem.label}
          </NavDropdown.Item>
        )
      ))}
    </NavDropdown>
  );

  return (
    <div>
      <Navbar
        collapseOnSelect
        bg={isScrolled ? 'white' : 'transparent'}
        variant={isScrolled ? 'light' : 'dark'}
        expand="lg"
        fixed="top"
        className="navbar-custom"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              width="125"
              height="50"
              className="d-inline-block align-top"
              alt="BBA Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className={isScrolled ? 'nav-link-dark' : 'nav-link-light'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={isScrolled ? 'nav-link-dark' : 'nav-link-light'}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/state" className={isScrolled ? 'nav-link-dark' : 'nav-link-light'}>
                State of Association
              </Nav.Link>
              <Nav.Link as={Link} to="/por" className={isScrolled ? 'nav-link-dark' : 'nav-link-light'}>
                Proof of Work
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className={isScrolled ? 'nav-link-dark' : 'nav-link-light'}>
                Contact
              </Nav.Link>
              {navItems.map(renderNavDropdown)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
