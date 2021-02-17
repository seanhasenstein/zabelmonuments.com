import React, { useState } from 'react';
import { Link } from 'gatsby';
import { slugify } from '../utils';
import { StoreTabsDiv } from '../styles/StoreInfoTabStyles';

const storeData = [
  {
    id: 1,
    address: {
      street: '910 Lime Kiln Rd.',
      city: 'Green Bay',
      state: 'WI',
      zipcode: '54302',
    },
    phone: '(920) 432-7995',
    hours: 'Open 9:00am-4:30pm',
    links: {
      phone: '9204327995',
      googleMaps: 'https://goo.gl/maps/Ux8Zqk2KWNz7PiPS7',
    },
  },
  {
    id: 2,
    address: {
      street: '1232 N 8th Street',
      city: 'Manitowoc',
      state: 'WI',
      zipcode: '54220',
    },
    phone: '(920) 684-3829',
    hours: 'Open 8:00am-4:30pm',
    links: {
      phone: '9206843829',
      googleMaps: 'https://goo.gl/maps/q3opxJnc7gwqzNNb6',
    },
  },
  {
    id: 3,
    address: {
      street: '1423 N 13th Street',
      city: 'Sheboygan',
      state: 'WI',
      zipcode: '53081',
    },
    phone: '(920) 452-2271',
    hours: 'Open 9:00am-4:30pm',
    links: {
      phone: '9204522271',
      googleMaps: 'https://goo.gl/maps/bMCYt28bTUHeeVNC7',
    },
  },
];

export default function StoreTabs() {
  const [activeStore, setActiveStore] = useState(storeData[0].id);

  return (
    <StoreTabsDiv>
      <div className="inner">
        <div className="nav">
          {storeData.map(s => (
            <button
              key={s.id}
              className={s.id === activeStore ? 'active' : ''}
              disabled={s.id === activeStore}
              onClick={() => setActiveStore(s.id)}
            >
              {s.address.city}
            </button>
          ))}
        </div>
        {storeData.map(s => {
          if (s.id === activeStore) {
            return (
              <div key={s.id} className="store">
                <Link
                  to="/contact"
                  state={{ store: slugify(s.address.city) }}
                  className="store-information"
                >
                  <span className="name">{s.address.city} Store</span>
                  <span className="action">Contact this store</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="item address">
                  <span className="left-border" />
                  <div className="icon">
                    <div className="inner">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="content">
                    <a
                      href={s.links.googleMaps}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.address.street} <br />
                      {s.address.city}, {s.address.state}, {s.address.zipcode}
                      <span className="external-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="item phone">
                  <span className="left-border" />
                  <div className="icon">
                    <div className="inner">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="content">
                    <a
                      href={`tel:+1${s.links.phone}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.phone}
                      <span className="external-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="item hours">
                  <div className="icon">
                    <div className="inner">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="content">
                    {s.hours} <br />
                    <span className="extra">(or anytime by appointment)</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </StoreTabsDiv>
  );
}
