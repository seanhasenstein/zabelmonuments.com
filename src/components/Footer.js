import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import AIOCA from '../images/aioca.png';
import MB from '../images/mb.png';
import WAOMB from '../images/waomb.png';

export default function Footer() {
  return (
    <FooterStyles>
      <div className="inner">
        <div className="brand">
          <div className="logo">
            <img src={Logo} alt="Zabel Monuments" />
          </div>
          <h3>Every Life is Worth Remembering</h3>
        </div>
        <div className="certifications">
          <a
            href="https://www.monuments-aica.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={AIOCA} alt="American Institute of Commemorative Art" />
          </a>
          <a
            href="https://monumentbuilders.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={MB} alt="Monument Builders" />
          </a>
          <a href="http://wambonline.org/" target="_blank" rel="noreferrer">
            <img src={WAOMB} alt="WI Association of Monument Builders" />
          </a>
        </div>
        <div className="nav">
          <div className="section">
            <h4>Learn More</h4>
            <ul className="nav-list">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/faq">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/granite-colors">Granite Colors</Link>
              </li>
              <li>
                <Link to="/staff">Meet Our Staff</Link>
              </li>
              <li>
                <Link to="/history">Our History</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/why-choose-us">Why Choose Us?</Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Product Gallery</h4>
            <ul>
              <li>
                <Link to="/gallery/individual-monuments">
                  Individual Monuments
                </Link>
              </li>
              <li>
                <Link to="/gallery/companion-monuments">
                  Companion Monuments
                </Link>
              </li>
              <li>
                <Link to="/gallery/hmong-monuments">Hmong Monuments</Link>
              </li>
              <li>
                <Link to="/gallery/jewish-monuments">Jewish Monuments</Link>
              </li>
              <li>
                <Link to="/gallery/etchings">Etchings</Link>
              </li>
              <li>
                <Link to="/gallery/garden-art">Garden Art</Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <Link to="/contact?store=green-bay">Green Bay Store</Link>
              </li>
              <li>
                <Link to="/contact?store=manitowoc">Manitowoc Store</Link>
              </li>
              <li>
                <Link to="/contact?store=sheboygan">Sheboygan Store</Link>
              </li>
              <li>
                <Link to="/contact?store=ask-our-cm">
                  Ask Our Certified Memorialist
                </Link>
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
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  padding: 0 1.5rem;
  width: 100%;
  background-color: #2a2721;

  h4 {
    margin: 0 0 0.875rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #fff;
  }

  .inner {
    margin: 0 auto;
    padding: 5rem 0 0;
    max-width: 1000px;
    width: 100%;
  }

  .brand {
    .logo {
      width: 12.5rem;

      img {
        width: 100%;
      }
    }

    h3 {
      margin: 1.75rem 0;
      font-size: 1.25rem;
      font-style: italic;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .certifications {
    margin: 2.5rem 0;

    a {
      margin: 0 0.75rem 0 0;
      padding: 0.375rem;
      display: inline-block;
      width: 3.5rem;
      height: 3.5rem;
      background-color: #35312a;
      border: 1px solid #403b32;
      border-radius: 0.25rem;
    }

    img {
      width: 100%;
    }

    a:hover {
      border-color: #4b463b;
    }
  }

  .nav {
    padding: 3rem 0 1.75rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    a {
      font-family: 'Poppins', sans-serif;
      font-size: 0.9375rem;
      color: rgba(255, 255, 255, 0.6);
      transition: color 200ms ease-in-out;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  ul {
    margin: 1rem 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0.5rem 0;
  }

  .copyright {
    padding: 1.5rem 0;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    color: #78889e;
    border-top: 1px solid #d7dfe8;
    color: rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 900px) {
    .section {
      width: 50%;
    }

    .section:nth-of-type(3),
    .section:nth-of-type(4) {
      margin: 2rem 0 0;
    }
  }

  @media (max-width: 600px) {
    .nav {
      flex-direction: column;
    }

    .section {
      margin: 2rem 0 0;

      &:first-of-type {
        margin: 0;
      }
    }
  }

  @media print {
    display: none;
  }
`;
