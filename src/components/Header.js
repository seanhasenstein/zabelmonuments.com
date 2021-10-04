import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/logo.png';

const primaryNavItems = [
  { id: 1, slug: '/', text: 'Home' },
  { id: 2, slug: '/services', text: 'Services' },
  { id: 3, slug: '/gallery/individual-monuments', text: 'Gallery' },
  { id: 4, slug: '/staff', text: 'Staff' },
  { id: 5, slug: '/about', text: 'About' },
  { id: 6, slug: '/contact?store=manitowoc', text: 'Contact Us' },
];

const secondaryNavItems = [
  {
    id: 1,
    slug: '/contact?store=ask-our-cm',
    text: 'Ask Our Certified Memorialist',
  },
  { id: 2, slug: '/faq', text: "FAQ's" },
  { id: 3, slug: '/granite-colors', text: 'Granite Colors' },
  { id: 4, slug: '/coupon', text: 'Website Coupon' },
  { id: 5, slug: '/guarantee', text: '100% Guarantee' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'inherit';
    };
  }, [open]);

  return (
    <HeaderStyles>
      <div className="secondary-nav">
        {secondaryNavItems.map(i => (
          <Link key={i.id} to={i.slug}>
            {i.text}
          </Link>
        ))}
      </div>
      <div className={`primary-nav ${open ? 'open' : ''}`}>
        <div className="inner">
          <div className="mobile-header-container">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Zabel Monuments" />
              </Link>
            </div>
            <button
              type="button"
              className="mobile-button"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <>
                  <span className="sr-only">Close navigation menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span className="sr-only">Open navigation menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
          <div className={`mobile-nav-container ${open ? 'open' : ''}`}>
            <nav>
              {primaryNavItems.map(i => (
                <Link key={i.id} to={`${i.slug}`}>
                  {i.text}
                </Link>
              ))}
            </nav>
            <div className="mobile-secondary-nav">
              {secondaryNavItems.map(i => (
                <Link key={i.id} to={i.slug}>
                  {i.text}
                </Link>
              ))}
            </div>
          </div>
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

  .mobile-secondary-nav,
  .mobile-button {
    display: none;
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

  @media (max-width: 991px) {
    .secondary-nav {
      justify-content: center;
    }

    .primary-nav {
      .inner {
        flex-direction: column;
      }
    }

    .logo {
      padding-bottom: 0.875rem;
    }
  }

  @media (max-width: 767px) {
    .secondary-nav {
      display: none;
    }

    .primary-nav {
      padding-bottom: 0;
    }

    .primary-nav .open {
      height: calc(100vh);
    }

    .mobile-header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-button {
      padding: 0.5rem;
      display: block;
      background-color: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }
    }

    .mobile-header-container,
    .mobile-nav-container,
    .inner {
      width: 100%;
    }

    .mobile-nav-container {
      display: none;

      &.open {
        display: block;
      }
    }

    nav {
      padding: 0 0 0.75rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-top: 1px solid rgba(255, 255, 255, 0.15);

      a,
      a:first-of-type {
        margin: 0;
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
    }

    .mobile-secondary-nav {
      padding: 0.5rem 1.5rem;
      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;
      right: 1.5rem;
      display: flex;
      flex-direction: column;
      background-color: #1a1915;

      a {
        padding: 0.625rem 0;
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        letter-spacing: 0.05em;
        color: rgba(255, 255, 255, 0.5);

        &:last-of-type {
          border-bottom: none;
        }

        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  @media (max-width: 350px) {
    .mobile-nav-container a {
      padding: 0.5rem 0.25rem;
    }
    .mobile-secondary-nav {
      padding: 0.375rem 1.25rem;

      a {
        padding: 0.5rem 0;
      }
    }
  }

  @media print {
    display: none;
  }
`;
