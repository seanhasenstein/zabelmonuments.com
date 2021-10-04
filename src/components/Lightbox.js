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
        // SHIFT + TAB KEYS
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

          // TAB KEY
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
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="actions">
          {selectedImg === 0 ? null : (
            <button
              onClick={handlePrevious}
              className="previous-button"
              ref={prevImgBtn}
              area-label="Previous Image"
              disabled={selectedImg === 0}
            >
              <span className="sr-only">Previous Image</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          {selectedImg === images.length - 1 ? null : (
            <button
              onClick={handleNext}
              className="next-button"
              ref={nextImgBtn}
              aria-label="Next Image"
              disabled={selectedImg === images.length - 1}
            >
              <span className="sr-only">Next Image</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </LightboxStyles>
  );
}

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
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.85);

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
    width: 2.125rem;
    height: 2.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.95);
    color: #18181b;
    border-radius: 9999px;
    border: none;
    cursor: pointer;

    svg {
      height: 1.25rem;
      width: 1.25rem;
    }

    &:hover {
      transform: scale(106%);
    }
  }

  .previous-button,
  .next-button {
    padding: 0.5rem;
    position: absolute;
    top: calc(50% - 1rem);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #262626;
    border-radius: 9999px;
    border: none;
    cursor: pointer;

    svg {
      height: 1.375rem;
      width: 1.375rem;
    }

    &:hover {
      color: #171717;
      transform: scale(106%);
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
    background-color: #fafafa;

    .container {
      width: 100%;
      height: 75%;
    }

    .actions {
      margin: 0.875rem 1.5rem 0 0;
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    .close-button,
    .previous-button,
    .next-button {
      background-color: #fafafa;
      color: #a3a3a3;
    }

    .close-button {
      width: 2.5rem;
      height: 2.5rem;

      svg {
        height: 1.75rem;
        width: 1.75rem;
      }
    }

    .previous-button,
    .next-button {
      position: relative;
      top: unset;
      left: unset;
      right: unset;
      bottom: unset;

      svg {
        height: 1.75rem;
        width: 1.75rem;
      }
    }
  }
`;

Lightbox.propTypes = {
  showLightbox: PropTypes.bool.isRequired,
  selectedImg: PropTypes.number.isRequired,
  setSelectedImg: PropTypes.func.isRequired,
  setShowLightbox: PropTypes.func.isRequired,
  images: PropTypes.array,
  title: PropTypes.string.isRequired,
};
