import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Lightbox({
  showLightbox,
  selectedImg,
  setSelectedImg,
  setShowLightbox,
  images,
  title,
}) {
  const prevImgBtn = React.useRef(null);
  const nextImgBtn = React.useRef(null);
  const closeLightboxBtn = React.useRef(null);

  const handlePrevious = () => {
    setSelectedImg(selectedImg - 1);
  };

  const handleNext = () => {
    setSelectedImg(selectedImg + 1);
  };

  const handleClose = e => {
    e.preventDefault();
    setShowLightbox(false);
  };

  const onKeyDown = e => {
    const { activeElement } = document;
    const closeBtn = closeLightboxBtn.current;
    const prevBtn = prevImgBtn.current;
    const nextBtn = nextImgBtn.current;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (selectedImg === images.length - 1) {
          return;
        } else {
          setSelectedImg(selectedImg + 1);
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (selectedImg === 0) {
          return;
        } else {
          setSelectedImg(selectedImg - 1);
        }
        break;
      case 'Tab':
        // SHIFT + TAB KEYS ***********
        if (e.shiftKey) {
          e.preventDefault();
          if (closeBtn === activeElement) {
            if (nextBtn) nextBtn.focus();
            else prevBtn.focus();
          } else if (prevBtn === activeElement) closeBtn.focus();
          else {
            if (prevBtn) prevBtn.focus();
            else closeBtn.focus();
          }

          // TAB KEY ***********
        } else {
          e.preventDefault();
          if (nextBtn === activeElement) closeBtn.focus();
          else if (prevBtn === activeElement) {
            if (nextBtn) nextBtn.focus();
            else closeBtn.focus();
          } else {
            if (prevBtn) prevBtn.focus();
            else nextBtn.focus();
          }
        }
        break;
      case 'Escape':
        setShowLightbox(false);
    }
  };

  React.useEffect(() => {
    if (showLightbox) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = 'inherit';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [showLightbox, selectedImg]);

  React.useEffect(() => {
    if (showLightbox) {
      const closeBtn = closeLightboxBtn.current;
      closeBtn.focus();
    }
  }, [showLightbox]);

  return (
    <LightboxStyles
      role="dialog"
      id="lightbox"
      aria-labelledby="lightbox"
      aria-modal="true"
      className={showLightbox ? 'active' : null}
    >
      <div className="container">
        <img
          src={images[selectedImg].node.secure_url}
          alt={`${title} photo ${selectedImg + 1} of ${images.length}`}
        />
        <button
          onClick={handleClose}
          className="close-button"
          ref={closeLightboxBtn}
          aria-label="Close Lightbox"
        >
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
        </button>
        <div className="actions">
          <button
            onClick={handlePrevious}
            className="previous-button flex-grow"
            ref={prevImgBtn}
            area-label="Previous Image"
            disabled={selectedImg === 0}
          >
            <span className="sr-only">Previous Image</span>
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="next-button flex-grow"
            ref={nextImgBtn}
            aria-label="Next Image"
            disabled={selectedImg === images.length - 1}
          >
            <span className="sr-only">Next Image</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </LightboxStyles>
  );
}

Lightbox.propTypes = {
  showLightbox: PropTypes.bool.isRequired,
  selectedImg: PropTypes.number.isRequired,
  setSelectedImg: PropTypes.func.isRequired,
  setShowLightbox: PropTypes.func.isRequired,
  images: PropTypes.array,
  title: PropTypes.string.isRequired,
};

const LightboxStyles = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;

  background-color: #f8fafc;

  &.active {
    display: flex;
  }

  .container {
    margin: 0 auto;
    max-width: 40rem;
    width: 65%;
    height: 75%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .close-button {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    color: #94a3b8;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;

    svg {
      height: 1.75rem;
      width: 1.75rem;
    }

    &:hover {
      color: #0f172a;
    }
  }

  .previous-button,
  .next-button {
    padding: 0;
    position: absolute;
    top: calc(50% - 1rem);
    background: transparent;
    color: #94a3b8;
    border: none;
    cursor: pointer;

    svg {
      height: 2rem;
      width: 2rem;
    }

    &:hover {
      color: #0f172a;
    }

    &:disabled {
      color: #e2e8f0;
    }
  }

  .previous-button {
    left: 2rem;
  }

  .next-button {
    right: 2rem;
  }

  @media (max-width: 600px) {
    .container {
      width: 100%;
      height: 75%;
    }

    .actions {
      margin: 0.5rem 1rem 0 0;
      display: flex;
      justify-content: flex-end;
      gap: 0.25rem;
    }

    .previous-button,
    .next-button {
      padding: 0 0.5rem;
      position: relative;
      top: unset;
      left: unset;
      right: unset;
      bottom: unset;
    }
  }
`;
