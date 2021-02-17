import React from 'react';
import NavLinkItem from './NavLinkItem';
import logo from '../images/logo.png';
import { Link } from 'gatsby';
import {
  HeaderContainer,
  Main,
  PrimaryNav,
  SecondaryNav,
  Brand,
} from '../styles/HeaderStyles';

const primaryNavItems = [
  { id: 1, slug: '/', text: 'Home' },
  { id: 2, slug: '/services', text: 'Services' },
  { id: 3, slug: '/gallery', text: 'Gallery' },
  { id: 4, slug: '/staff', text: 'Staff' },
  { id: 5, slug: '/about', text: 'About' },
  { id: 6, slug: '/contact', text: 'Contact Us' },
];

const secondaryNavItems = [
  { id: 1, slug: '/coupon', text: 'Website Coupon' },
  { id: 2, slug: '/faq', text: 'FAQ' },
  { id: 3, slug: '/guarantee', text: '100% Guarantee' },
  {
    id: 4,
    slug: '/contact',
    state: { store: 'ask-our-cm' },
    text: 'Ask Our Certified Memorialist',
  },
];

export default function Header() {
  return (
    <HeaderContainer>
      <SecondaryNav>
        {secondaryNavItems.map(i => (
          <Link key={i.id} to={i.slug} state={i.state || null}>
            {i.text}
          </Link>
        ))}
      </SecondaryNav>
      <Main>
        <div className="inner">
          <Brand>
            <Link to="/">
              <img src={logo} alt="Zabel Monuments" />
            </Link>
          </Brand>
          <PrimaryNav>
            {primaryNavItems.map(i => (
              <NavLinkItem key={i.id} slug={i.slug} text={i.text} />
            ))}
          </PrimaryNav>
        </div>
      </Main>
    </HeaderContainer>
  );
}
