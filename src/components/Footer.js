import React from 'react';
import { Link } from 'gatsby';
import { FooterContainer } from '../styles/FooterStyles';
import logo from '../images/logo-small.png';
import cert1 from '../images/aioca.png';
import cert2 from '../images/mb.png';
import cert3 from '../images/waomb.png';

export default function Footer() {
  return (
    <FooterContainer>
      <div className="inner">
        <div className="brand">
          <img src={logo} alt="Zabel Monuments" />
          <h3>Every Life is Worth Remembering</h3>
        </div>
        <div className="certifications">
          <a
            href="https://www.monuments-aica.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cert1} alt="American Institute of Commemorative Art" />
          </a>
          <a
            href="https://monumentbuilders.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cert2} alt="Monument Builders" />
          </a>
          <a href="http://wambonline.org/" target="_blank" rel="noreferrer">
            <img src={cert3} alt="WI Association of Monument Builders" />
          </a>
        </div>
        <div className="nav">
          <div className="section">
            <h4>Learn More</h4>
            <ul className="nav-list">
              <li>
                <Link to="/why-choose-us">Why Choose Us?</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>

              <li>
                <Link to="/faq">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/staff">Meet Our Staff</Link>
              </li>
              <li>
                <Link to="/our-history">Our History</Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Product Gallery</h4>
            <ul>
              <li>
                <Link to="/gallery/individual">Individual</Link>
              </li>
              <li>
                <Link to="/gallery/companion">Companion</Link>
              </li>
              <li>
                <Link to="/gallery/hmong">Hmong</Link>
              </li>
              <li>
                <Link to="/gallery/jewish">Jewish</Link>
              </li>
              <li>
                <Link to="/gallery/etchings">Etchings</Link>
              </li>
              <li>
                <Link to="/gallery/garden-art">Garden Art</Link>
              </li>
              <li>
                <Link to="/gallery/granite-color">Granite Color</Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <Link to="/contact-green-bay">Green Bay Store</Link>
              </li>
              <li>
                <Link to="/contact-manitowoc">Manitowoc Store</Link>
              </li>
              <li>
                <Link to="/contact-sheboygan">Sheboygan Store</Link>
              </li>
              <li>
                <Link to="/ask-our-cm">Ask Our Certified Memorialst</Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Other</h4>
            <ul>
              <li>
                <Link to="/webiste-coupon">Website Coupon</Link>
              </li>
              <li>
                <Link to="/guarantee">100% Guarantee</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Zabel Monuments. All Rights
          Reserved.
        </div>
      </div>
    </FooterContainer>
  );
}
