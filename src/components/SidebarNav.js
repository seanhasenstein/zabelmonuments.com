import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const links = [
  {
    id: 1,
    text: 'Our Services',
    to: '/services',
  },
  {
    id: 2,
    text: 'About Us',
    to: '/about',
  },
  {
    id: 3,
    text: 'Our History',
    to: '/our-history',
  },
  {
    id: 4,
    text: 'Why Choose Us?',
    to: '/why-choose-us',
  },
  {
    id: 5,
    text: 'Meet Our Staff',
    to: '/staff',
  },
  {
    id: 6,
    text: 'FAQ',
    to: '/faq',
  },
];

const Container = styled.div`
  padding: 0 2.5rem 0 0;
  display: flex;
  flex-direction: column;
  width: 235px;

  a {
    padding: 0.5rem;
    display: block;
  }
`;

export default function SidebarNav({ location }) {
  console.log(location);
  return (
    <Container>
      {links.map(l => (
        <Link key={l.id} to={l.to}>
          {l.text}
        </Link>
      ))}
    </Container>
  );
}
