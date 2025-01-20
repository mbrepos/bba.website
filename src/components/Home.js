import "../styles/styles.css";
import React from "react";
import { Button } from "react-bootstrap";
import ReactLogo from "../images/homelogo.svg";
import firstGif from "../images/study.gif"
import srcVector from "../images/image.gif"

/* Asset Imports */
import randomFalcon from "../images/randomFlacon.png"
import TeamCard from "./TeamCard.js";
import partnerVectorRight from "../images/partnerVectorRight.png";
import partnerVectorLeft from "../images/partnerVectorLeft.png";
import jump from "../images/jump.png";
import BBALogoWhite from "../images/bbalogowhite.png";
import polygonScatter from "../images/polygon-scatter.svg"


/* Clear Team Photo Imports */
import nicclear from "../images/team/clear/nicclear.png";
import mikeclear from "../images/team/clear/mikeclear.png";
import samclear from "../images/team/clear/samclear.png";
import nilufarclear from "../images/team/clear/nilufarclear.png";
import chrisclear from "../images/team/clear/chrisclear.png";
import antonisclear from "../images/team/clear/antonisclear.png";
import zackclear from "../images/team/clear/zackclear.png";

/* Partner Photo Imports */
import encode from "../images/encode.png"
import coingecko from "../images/coingecko.png"
import ben from "../images/ben.png"
import thetie from "../images/the_tie.png"
import baf from  "../images/baf.png"
import spawn from  "../images/spawn.png"

import { Footer } from "./Footer"

export const Home = () => {
  return (
    <div>
      <Landing />
      <Goals />
      <Description />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
};

export const Landing = () => {
  return (
    <div className="landing">
      <div className="element-wrapper">
        <h1 className="element-wrapper-h1">Bentley Blockchain Association</h1>
        <h2 className="element-wrapper-h2">
        Shaping the Future of Blockchain Innovation, Education, and Technology at Bentley University
        </h2>
        <div className="main-button">
          <Button href="https://medium.com/@Bentleyblockchain" target="_new" variant="outline-light">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

const Goals = () => {
  return (
    <div className="goals">
      <div id="a" className="goals-left-container">
        <div className="goals-text">
          <h2>
            <span className="creating-inspiration"></span>
          </h2>
        </div>
        <div className="goals-buttons">
          <Button target="_new" href="https://inky-ease-5b3.notion.site/Bentley-Blockchain-Association-8d70a5c98a3347e1a2bfa5e552a524ca" variant="dark" size="lg" style={{ fontSize: "14px", padding: "15px", fontWeight: "bold", borderRadius: "0em" }}>
            Explore Resources
          </Button>
          <Button href="https://discord.gg/7K2MAqYJrQ" variant="outline-dark" target="_new" size="lg" style={{ fontSize: "14px", padding: "15px", borderRadius: "0em" }}>
            Join Discord
          </Button>
        </div>
      </div>

      <div id="b" className="goals-vector">
        <img src={srcVector} alt="Education BBA" />
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="description">
      <div className="description-wrapper">
        <div className="description-main-container">
          <div className="description-header">
            {/* An ASCII header of BBA because who doesn't love ASCII... */}
            <pre style={{ color: "#FFFFFF" }}> {`
  ____                   _     _                                           
 | __ )    ___   _ __   | |_  | |   ___   _   _                            
 |  _ \\   / _ \\ | '_ \\  | __| | |  / _ \\ | | | |                           
 | |_) | |  __/ | | | | | |_  | | |  __/ | |_| |                           
 |____/   \\___| |_| |_|  \\__| |_|  \\___|  \\__, |                           
  ____    _                  _            |___/            _               
 | __ )  | |   ___     ___  | | __   ___  | |__     __ _  (_)  _ __        
 |  _ \\  | |  / _ \\   / __| | |/ /  / __| | '_ \\   / _\` | | | | '_ \\       
 | |_) | | | | (_) | | (__  |      | (__  | | | | | (_| | | | | | | |      
 |____/  |_|  \\___/   \\___| |_|\\_\\  \\___| |_| |_|  \\__ _|_|_| |_| |_|      

    / \\     ___   ___    ___     ___  (_)   __ _  | |_  (_)   ___    _ __  
   / _ \\   / __| / __|  / _ \\   / __| | |  / _\` | | __| | |  / _ \\  | '_ \\ 
  / ___ \\  \\__ \\ \\__ \\ | (_) | | (__  | | | (_| | | |_  | | | (_) | | | | |
 /_/   \\_\\ |___/ |___/  \\___/   \\___| |_|  \\__ _|  \\__| |_|  \\___/  |_| |_|
                `}
            </pre>
          </div>
          <div className="description-container">
            <div className="description-container-item">
              <div className="summary">
                <h2>Our Saga...</h2>
                <p>
                  The Bentley Blockchain Association (BBA) was founded in the
                  Fall of 2022 by{" "}
                  <span style={{ color: "#007BFF" }}> Alex Kim </span> and
                  <span style={{ color: "#007BFF" }}> Jordan Soifer</span>
                  <span style={{ color: "#FFFFFF" }}>.</span> Since then the BBA
                  has evolved into a dynamic cohort of students committed to
                  advancing the awareness and study of blockchain technology.
                  <br /> {/* This line break adds a new line */}
                  <br /> {/* This line break adds a new line */}
                </p>
              </div>
            </div>
            <div className="description-container-item">
              <div className="Vision">
                <h2>Our Vision...</h2>
                <p>
                  Our vision is to foster a limitless, think-tank where students from all walks of life can
                  collaborate in pursuit of innovation, economic prosperity, and
                  financial freedom.
                  <br /> {/* This line break adds a new line */}
                  <br /> {/* This line break adds a new line */}
                  <span style={{ fontStyle: "italic", color: "#007BFF" }}>
                    “Innovation distinguishes between a leader and a follower.”{" "}
                    {"Steve Jobs"}
                  </span>
                </p>
              </div>
            </div>
            <div className="description-container-item">
              <div className="Mission">
                <h2>Our Mission...</h2>
                <p>
                  Our mission is to empower undergraduate students by providing
                  them with opportunities to explore blockchain, decentralized
                  finance (DeFi), and fintech related fields. We aim to create an
                  environment that equips students to become leaders in today’s
                  competitive business landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Removed unused Vision component

const Team = () => {
  return (
    <div className="team">
      <div className="team-inner-container">
        <h1>Executive Board Members</h1>
        <div className="team-flex-container">
          <div className="row1">
            <div className="team-card-container"></div>
            <div className="team-card-container">
              <TeamCard
                name="Nicolas Saliou"
                title="President & Chairman"
                icon={nicclear}
                linkden="https://www.linkedin.com/in/nicolas-saliou-744630251/"
              />{" "}
            </div>
            <div className="team-card-container">
            <TeamCard
                name="Samuel Capobianco"
                title="Vice President of P&E"
                icon={samclear}
                linkden="https://www.linkedin.com/in/samuel-capobianco-13836622a/"
              />
            </div>
          </div>
          <div className="row2">
            <div className="team-card-container"></div>
            <div className="team-card-container">
              <TeamCard
                name="Mike Binder"
                title="Vice President of Technology"
                icon={mikeclear}
                linkden="https://www.linkedin.com/in/m-binder/"
              />
            </div>
            <div className="team-card-container">
              <TeamCard
                name="Nilufar Noorian"
                title="Director of Technology"
                icon={nilufarclear}
                linkden="https://www.linkedin.com/in/nilufar-noorian/"
              />
            </div>
          </div>
          <div className="row3">
            <div className="team-card-container"></div>
            <div className="team-card-container">
              <TeamCard
                name="Chris Guyette"
                title="Distinguished Member"
                icon={chrisclear}
                linkden="https://www.linkedin.com/in/christopher-guyette"
              />
            </div>
            <div className="team-card-container">
              <TeamCard
                name="Antonis Moraitis"
                title="Blockchain Analyst"
                icon={antonisclear}
                linkden="https://www.linkedin.com/in/antonismoraitis/"
              />
            </div>
            <div className="team-card-container">
              <TeamCard
                name="Zack Erickson"
                title="Blockchain Analyst"
                icon={zackclear}
                linkden="https://www.linkedin.com/in/zach-erickson22/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="partners">
      <img
        className="partner-vector-left"
        src={partnerVectorLeft}
        alt="beautiful vector"
      />
      <div className="partner-container">
        <div className="partner-header">
          <h2>Our Partners</h2>
          <p>Please see our list of partners</p>
        </div>
        <div className="partner-image-container">
          <div className="partner-image-item">
            <a href="https://www.blockchainedu.org/" target="_new"><img className="jump" src={ben} alt="ben" /></a>
          </div>
          <div className="partner-image-item">
            <a href="https://www.encode.club/" target="_new"><img className="jump" src={encode} alt="encode" /></a>
          </div>
          <div className="partner-image-item">
            <a href="https://www.coingecko.com/" target="_new"><img className="jump" src={coingecko} alt="coingecko" /></a>
          </div>
          <div className="partner-image-item">
            <a href="https://www.thetie.io/" target="_new"><img className="jump" style={{ marginTop: "20px" }} src={thetie} alt="the-tie" /></a>
          </div>
          <div className="partner-image-item">
            <a href="https://www.spawn.global/" target="_new"><img className="jump" style={{ marginTop: "20px" }} src={spawn} alt="the-tie" /></a>
          </div>
          <div className="partner-image-item">
            <a href="https://www.blockchainacceleration.org/" target="_new"><img className="jump" style={{ marginTop: "20px" }} src={baf} alt="the-tie" /></a>
          </div>
          {/* <div className="partner-image-item">
            <img className="jump" src={jump} alt="jump" />
          </div>
          <div className="partner-image-item">
            <img className="jump" src={jump} alt="jump" />
          </div> */}
        </div>
      </div>
      <img
        className="partner-vector-right"
        src={partnerVectorRight}
        alt="beautiful vector"
      />
    </div>
  );
};

