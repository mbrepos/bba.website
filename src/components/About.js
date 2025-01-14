import React, { Component } from "react";
import '../styles/about.css'
import abstract from "../images/abstractabout.png"
import { SocialIcon } from "react-social-icons";
import randomFalcon from "../images/white.png";
import { Footer } from "./Footer"


export default class About extends Component {

  render() {
    return (
      <div className="about">
        <div className="about-landing">
          <div className="block">
          <h1 style={{ fontWeight: "bold" }}>
            <span style={{ background: "#144181", color: "white", padding: "20px", fontWeight: "bold" }}>Welcome!</span><br /><br />Join our Community, today!</h1>
          <img src={abstract} />
          </div>
        </div>
        <div className="falcon-super">
          <div style={{ background: "#144181", width: "450px", height: "200px", display: "flex" }}>
            <img style={{ maxHeight: "100%", maxWidth: "100%", padding: "10px", alignContent: "center" }} src={randomFalcon} />
          </div>
          <div style={{ color: "white", textAlign: "left", padding: "50px" }}>
            <p>Join our <span style={{ fontWeight: "bold" }}>amazing</span> network of developers, students, alumni and investors. We are the most vibrant blockchain education community existing at the university level.</p>
          </div>
        </div>
        <div className="about-info">
          <div className="about-info-element">
            <div className="about-wrapper-el">
              <SocialIcon
                url="https://www.linkedin.com/company/bentley-blockchain/"
                target="_new"
                className="social-icon"
                style={{ padding: "100px"}}
                label="Linkden"
              />
            </div>
            <div className="about-wrapper-el">
              <SocialIcon
                url="https://t.me/bentleyblockchain"
                target="_new"
                className="social-icon"
                style={{ padding: "100px"}}
                label="Linkden"
              />
            </div>
            <div className="about-wrapper-el">
              <SocialIcon
                url="https://medium.com/@Bentleyblockchain"
                target="_new"
                className="social-icon"
                style={{ padding: "100px"}}
                label="Linkden"
              />
            </div>
            <div className="about-wrapper-el">
              <SocialIcon
                url="https://discord.gg/7K2MAqYJrQ"
                target="_new"
                className="social-icon"
                style={{ padding: "100px"}}
                label="Linkden"
              />
            </div>
            <div className="about-wrapper-el">
              <SocialIcon
                url="https://www.instagram.com/bentley.blockchain/"
                target="_new"
                className="social-icon"
                style={{ padding: "100px"}}
                label="Linkden"
              />

              {/*  outline: "solid", outlineColor: "black", outlineWidth: "3px"  */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
