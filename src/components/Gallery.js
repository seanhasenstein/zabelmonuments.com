import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import { slugify } from '../utils';
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
  {
    id: 7,
    label: 'Granite Colors',
    slug: 'granite-colors',
  },
];

export default function Gallery({ images, title }) {
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
              <h2>{title} Gallery</h2>
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
                {images.length > 0 &&
                  images.map((image, index) => (
                    <button
                      key={image.node.id}
                      onClick={e => handleClick(e, index)}
                      className="grid-item"
                    >
                      <div className="img-container">
                        <img
                          src={image.node.secure_url}
                          alt={`${title} photo ${index + 1} of ${
                            images.length
                          }`}
                        />
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </GalleryPageStyles>
      </Layout>
      <Lightbox
        showLightbox={showLightbox}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        setShowLightbox={setShowLightbox}
        images={images}
        initFocusedImg={initFocusedImg}
        shouldReturnFocus={shouldReturnFocus}
        title={title}
      />
    </>
  );
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

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
    font-size: 1.5rem;
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
  }

  .grid-item {
    padding: 0;
    position: relative;
    width: 25%;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .img-container {
    padding: 0.5rem;
    width: 100%;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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

    .img-container {
      height: 7rem;
    }
  }

  @media (max-width: 767px) {
    .wrapper {
      padding: 3.5rem 0;
    }

    h2 {
      margin: 0 0 1.75rem;
      text-align: center;
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
      width: 33.33%;
    }

    .img-container {
      height: 9rem;
    }
  }

  @media (max-width: 500px) {
    .grid-item {
      width: 50%;
    }
  }
`;
