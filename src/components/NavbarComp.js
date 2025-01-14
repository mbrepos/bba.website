import React, { Component, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import Logo from "../images/bbalogowhite.png";
import '../styles/styles.css'
import { Construction } from "./Construction";
import { State } from "./State";
import { Proof } from "./PoR";

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = { state: false };
  }

  render() {
    const changeBackground = () => {
      if (window.scrollY >= 10) {
        this.setState({ state: true });
      } else {
        this.setState({ state: false });
      }
    };

    window.addEventListener("scroll", changeBackground);

    return (
      <BrowserRouter>
        <div>
          <Navbar collapseOnSelect
            bg={this.state.state === true ? "white" : "transparent"}
            expand="lg"
            fixed="top"
            variant={this.state.state === true ? "light" : "dark"}
          >
            <Container fluid>
              <Navbar.Brand href="/" style={{ paddingLeft: "15px" }}>
                <img
                  alt=""
                  src={Logo}
                  width="125"
                  height="50"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                  className="justify-content-center"
                  navbarScroll
                  style={{ paddingLeft: "30px", gap: "20px" }}

                >
                  {/* <Nav.Link className="nav_link" style={this.state.state === true ? {color: "black"} :{color: "white"}} as={Link} to={"/about"}>
                    About
                  </Nav.Link>
                  <Nav.Link className="nav_link" style={this.state.state === true ? {color: "black"} :{color: "white"}}  as={Link} to={"/contact"}>
                    Contact
                  </Nav.Link>
                  <Nav.Link className="nav_link" style={this.state.state === true ? {color: "black"} :{color: "white"}}  as={Link} to={"/resources"}>
                    Rescources
                  </Nav.Link> */}

                  <NavDropdown title={
                    <span className={this.state.state === true ? "nav-drop-down-dark" : "nav-drop-down-light"}>Community</span>
                  } style={{ color: "white" }} id="collasible-nav-dropdown">
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }} href="/community">Join the Community</NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title={
                    <span className={this.state.state === true ? "nav-drop-down-dark" : "nav-drop-down-light"}>Students</span>
                  } style={{ color: "white" }} id="collasible-nav-dropdown">
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }} href="https://bentley-blockchain-association.gitbook.io/bentley-blockchain-association/">Public Resources</NavDropdown.Item>
                    {/* <NavDropdown.Item className="nav_link" style={{ color: "black" }} href="https://inky-ease-5b3.notion.site/Bentley-Blockchain-Association-8d70a5c98a3347e1a2bfa5e552a524ca">Public Resources</NavDropdown.Item> */}
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }} href="https://medium.com/@Bentleyblockchain">BBA Medium Articles</NavDropdown.Item>
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }} href="/state-of-crypto">State of Crypto Report</NavDropdown.Item>
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }} href="/the-future-of-blockchain-accounting-and-auditing">Proof of Reserves</NavDropdown.Item>
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }} href="https://bentleyblockchainassociation.substack.com/">Substack</NavDropdown.Item>
                    {/* <NavDropdown.Item className="nav_link" style={{ color: "black" }} href="#action3">Falcon DAO</NavDropdown.Item> */}
                  </NavDropdown>
                  {/* <NavDropdown disabled title={
                    <span className={this.state.state === true ? "nav-drop-down-dark" : "nav-drop-down-light"}>Investors</span>
                  } style={{ color: "white" }} id="navbarScrollingDropdown">
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }}href="#action3">Monetary Contribution</NavDropdown.Item>
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }}href="#action3">Business Partnerships</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown disabled title={
                    <span className={this.state.state === true ? "nav-drop-down-dark" : "nav-drop-down-light"}>Press</span>
                  } style={{ color: "white" }} id="navbarScrollingDropdown">
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }}href="#action3">Press Inquiries</NavDropdown.Item>
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }}href="#action3">Brand Identity</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown disabled title={
                    <span className={this.state.state === true ? "nav-drop-down-dark" : "nav-drop-down-light"}>Incubator</span>
                  } style={{ color: "white" }} id="navbarScrollingDropdown">
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }}href="#action3">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item className="nav_link" style={{ color: "black" }}href="#action3">Learn More</NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                  {/* <Nav.Link href="/home" disabled>
                    Link
                  </Nav.Link>
                   */}

                </Nav>
              </Navbar.Collapse>
              {/* <Nav
                className="me-auto my-2 my-lg-0"
                style={{ flex: 1 }}
                rightPull
              >
                <Nav.Link href="/construction" style={{ background: "black", borderRadius: "10px", padding: "10px", color: "white", fontSize: "14px", padding: "15px", borderRadius: "0em" }}>
                  Falcon DAO →
                </Nav.Link>
              </Nav> */}
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<About />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/state-of-crypto" element={<State />} />
            <Route path="/the-future-of-blockchain-accounting-and-auditing" element={<Proof />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
