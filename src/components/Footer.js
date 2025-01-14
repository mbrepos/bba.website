import React from "react";
import '../styles/styles.css'
import blue from "../images/blue.png"

export const Footer = () => {

    return (
      <div className="footer">
        <footer className="footer-wrapper">
          <div className="footer-logo">
            <img
              className="footer-logo-img"
              src={blue}
              alt="beautiful vector"
            />
          </div>
          <div className="footer-elements">
            <div className="footer-elements-item">
              <a href="/construction">
                <h2 class="footer-heading">Students</h2>
              </a>
              <ul role="list">
                <li>
                  <a
                    href="/construction"
                    class="footer-link"
                  >
                    Learn
                  </a>
                </li>
                <li>
                  <a href="/construction" class="footer-link">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-elements-item">
              <a href="/construction">
                <h2 class="footer-heading">Socials</h2>
              </a>
              <ul role="list">
                <li>
                  <a
                    href="/construction"
                    class="footer-link"
                  >
                    Press Inquiries
                  </a>
                </li>
                <li>
                  <a href="/construction" class="footer-link">
                    Press Kit and Brand Identity
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-elements-item">
              <a href="/construction">
                <h2 class="footer-heading">Contact us</h2>
              </a>
              <ul role="list" class="w-list-unstyled">
                <li>
                  <a
                    href="/construction"
                    class="footer-link"
                  >
                    Mail
                  </a>
                </li>
                {/* <li>
                  <a href="/construction" class="footer-link">
                    Legal
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  };