import React from 'react';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import { slugify } from '../utils';
import { Image } from '../types';
import Layout from './Layout';
import Lightbox from './Lightbox';

const galleryLinks = [
  {
    id: 1,
    label: 'Individual Monuments',
    slug: 'individual-monuments',
  },
  {
    id: 2,
    label: 'Companion Monuments',
    slug: 'companion-monuments',
  },
  {
    id: 3,
    label: 'Hmong Monuments',
    slug: 'hmong-monuments',
  },
  {
    id: 4,
    label: 'Jewish Monuments',
    slug: 'jewish-monuments',
  },
  {
    id: 5,
    label: 'Etchings',
    slug: 'etchings',
  },
  {
    id: 6,
    label: 'Garden Art',
    slug: 'garden-art',
  },
];

type Props = {
  images: Image[];
  title: string;
};

export default function Gallery({ images, title }: Props) {
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(0);
  const [shouldReturnFocus, setShouldReturnFocus] = React.useState(false);
  const [initFocusedImg, setInitFocusedImg] = React.useState(null);

  React.useEffect(() => {
    if (!showLightbox && shouldReturnFocus) {
      initFocusedImg.focus();
    }
  }, [showLightbox, initFocusedImg]);

  const handleClick = (e, key) => {
    e.preventDefault();
    setShowLightbox(true);
    setSelectedImg(key);
    setShouldReturnFocus(true);
    setInitFocusedImg(e.currentTarget);
  };

  const handleSelectChange = e => {
    navigate(`/gallery/${e.target.value}`);
  };

  return (
    <>
      <Layout>
        <GalleryPageStyles>
          <div className="wrapper">
            <aside>
              <div className="container">
                {galleryLinks.map(l => (
                  <Link
                    key={l.id}
                    to={`/gallery/${l.slug}`}
                    partiallyActive={true}
                    activeClassName="current"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </aside>
            <div className="gallery">
              <h2>
                <span>{title} Gallery</span>
              </h2>
              <div className="mobile-nav">
                <select onChange={handleSelectChange} value={slugify(title)}>
                  {galleryLinks.map(l => (
                    <option key={l.id} value={l.slug}>
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid">
                {images.length === 0 ? (
                  <div className="empty-message">
                    There are currently no photos in this gallery.
                  </div>
                ) : (
                  <>
                    {images.map((image, index) => (
                      <button
                        key={image.node.id}
                        onClick={e => handleClick(e, index)}
                        className="grid-item"
                      >
                        <img
                          src={image.node.secure_url}
                          alt={`${title} photo ${index + 1} of ${
                            images.length
                          }`}
                        />
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </GalleryPageStyles>
      </Layout>
      {images.length === 0 ? null : (
        <Lightbox
          showLightbox={showLightbox}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          setShowLightbox={setShowLightbox}
          images={images}
          title={title}
        />
      )}
    </>
  );
}

const GalleryPageStyles = styled.div`
  padding: 0 1.5rem;

  .wrapper {
    margin: 0 auto;
    padding: 5rem 0 6rem;
    display: flex;
    max-width: 1000px;
    width: 100%;
  }

  h2 {
    margin: 0 0 2rem;
    position: relative;
    font-size: 1.25rem;
    text-align: center;

    span {
      padding: 0 1.5rem;
      position: relative;
      background-color: #f8fafc;
      z-index: 200;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0.875rem;
      width: 100%;
      height: 1px;
      background-color: #cbd5e1;
      z-index: 10;
    }
  }

  .mobile-nav {
    display: none;
  }

  .gallery {
    width: 100%;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.875rem;
  }

  .grid-item {
    padding: 0;
    position: relative;
    height: 9.6875rem;
    width: calc(25% - 0.65625rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    border: 5px solid #fff;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0.25);
      transition: box-shadow 200ms ease-in-out;
    }

    &:hover ::after {
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .empty-message {
    color: #64748b;
  }

  aside {
    padding: 0 5rem 0 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    max-width: 21rem;
    width: 100%;

    .container {
      padding: 0.5rem 0.375rem 0.5rem 0.5rem;
      background-color: #fff;
      border: 1px solid #f1f5f9;
      border-radius: 0.25rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }

    a {
      padding: 0 0.875rem;
      height: 2.5rem;
      position: relative;
      display: flex;
      align-items: center;
      font-size: 0.9375rem;
      font-weight: 400;
      line-height: 1;
      color: #334155;
      letter-spacing: 0.0125em;
      border-bottom: 1px solid #f1f5f9;

      &:first-of-type {
        border-top: 1px solid #f1f5f9;
      }

      &:after {
        content: '';
        position: absolute;
        right: -1.125rem;
        top: 0;
        border-top: 1.25rem solid transparent;
        border-left: 1.25rem solid transparent;
        border-bottom: 1.25rem solid transparent;
      }

      &:hover {
        background-color: #fdfdfd;
        color: #000;
      }

      &.current,
      &.current:hover {
        margin-top: -1px;
        font-weight: 500;
        color: #fff;
        text-shadow: 0 1px 1px #527c34;
        background-color: #6ea546;
        border-top: none;
        border-bottom: 1px solid #527c34;
        border-radius: 0.125rem 0 0 0.125rem;

        &:after {
          border-left: 1.125rem solid #6ea546;
        }
      }
    }
  }

  @media (max-width: 991px) {
    aside {
      padding: 0 3rem 0 0;
      max-width: 19rem;
    }
  }

  @media (max-width: 900px) {
    .wrapper {
      padding: 3.5rem 0;
    }

    .mobile-nav {
      margin: 0 auto 2rem;
      display: flex;
      justify-content: center;
    }

    aside {
      display: none;
    }

    .grid-item {
      width: calc(33.33% - 0.5833rem);
    }
  }

  @media (max-width: 500px) {
    .grid-item {
      width: calc(50% - 0.4375rem);
    }
  }
`;