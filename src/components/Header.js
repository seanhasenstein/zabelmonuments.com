import React from 'react';
import styled from 'styled-components';
import NavLinkItem from './NavLinkItem';
import logo from '../images/logo.png';
import { Link } from 'gatsby';

const primaryNavItems = [
  { id: 1, slug: '/', text: 'Home' },
  { id: 2, slug: '/services', text: 'Services' },
  { id: 3, slug: '/gallery/individual-monuments', text: 'Gallery' },
  { id: 4, slug: '/staff', text: 'Staff' },
  { id: 5, slug: '/about', text: 'About' },
  { id: 6, slug: '/contact?store=manitowoc', text: 'Contact Us' },
];

const secondaryNavItems = [
  { id: 1, slug: '/coupon', text: 'Website Coupon' },
  { id: 2, slug: '/faq', text: 'FAQ' },
  { id: 3, slug: '/guarantee', text: '100% Guarantee' },
  {
    id: 4,
    slug: '/contact?store=ask-our-cm',
    text: 'Ask Our Certified Memorialist',
  },
];

export default function Header() {
  return (
    <HeaderStyles>
      <div className="secondary-nav">
        {secondaryNavItems.map(i => (
          <Link key={i.id} to={i.slug}>
            {i.text}
          </Link>
        ))}
      </div>
      <div className="primary-nav">
        <div className="inner">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Zabel Monuments" />
            </Link>
          </div>
          <nav>
            {primaryNavItems.map(i => (
              <NavLinkItem key={i.id} slug={i.slug} text={i.text} />
            ))}
          </nav>
        </div>
      </div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  .secondary-nav {
    padding: 0.5rem 1rem;
    width: 100%;
    background-color: #1a1915;
    display: flex;
    justify-content: flex-end;

    a {
      margin: 0 0 0 2.25rem;
      font-family: 'Poppins', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.025em;
      color: rgba(255, 255, 255, 0.9);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .primary-nav {
    padding: 0.875rem 1.5rem;
    width: 100%;
    background-color: #2a2721;

    .inner {
      margin: 0 auto;
      max-width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .logo {
    width: 12.5rem;

    img {
      width: 100%;
    }
  }

  nav {
    a {
      margin: 0 1.5rem;
      padding: 0 0.25rem;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      letter-spacing: 0.025em;
      color: rgba(255, 255, 255, 0.7);
      transition: color 200ms ease-in-out;

      &:hover {
        color: #fff;
      }

      &:first-of-type {
        margin-left: 0;
        padding-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
        padding-right: 0;
      }
    }
  }

  @media print {
    display: none;
  }
`;
