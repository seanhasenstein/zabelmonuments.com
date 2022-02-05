import React from 'react';
import styled from 'styled-components';
import { Image } from '../types';

type Props = {
  images: Image[];
  showLightbox: boolean;
  setShowLightbox: React.Dispatch<React.SetStateAction<boolean>>;
  selectedImg: number;
  setSelectedImg: React.Dispatch<React.SetStateAction<number>>;
  prevButton: React.MutableRefObject<HTMLButtonElement | null>;
  nextButton: React.MutableRefObject<HTMLButtonElement | null>;
  closeButton: React.MutableRefObject<HTMLButtonElement | null>;
  imgRef: React.MutableRefObject<HTMLImageElement | null>;
  galleryName: string;
};

export default function Lightbox({
  images,
  showLightbox,
  setShowLightbox,
  selectedImg,
  setSelectedImg,
  prevButton,
  nextButton,
  closeButton,
  imgRef,
  galleryName,
}: Props) {
  return (
    <LightboxStyles
      role="dialog"
      id="lightbox"
      aria-labelledby="lightbox"
      aria-modal="true"
      className={showLightbox ? 'active' : ''}
    >
      <div className="container">
        <img
          ref={imgRef}
          src={images[selectedImg].node.secure_url}
          alt={`${galleryName} photo ${selectedImg + 1} of ${images.length}`}
        />
        <button
          onClick={() => setShowLightbox(false)}
          className="close-button"
          ref={closeButton}
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
          <button
            onClick={() => setSelectedImg(prevIndex => prevIndex - 1)}
            className="previous-button"
            ref={prevButton}
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
            onClick={() => setSelectedImg(prevIndex => prevIndex + 1)}
            className="next-button"
            ref={nextButton}
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
      <p className="count">
        {selectedImg + 1} / {images.length}
      </p>
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
  background-color: rgba(15, 15, 15, 0.95);

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
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.85);
    border-radius: 9999px;
    border: none;
    cursor: pointer;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      outline-color: #fff;
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
    background-color: transparent;
    color: rgba(255, 255, 255, 0.85);
    border-radius: 9999px;
    border: none;
    cursor: pointer;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      outline-color: #fff;
    }

    &:disabled {
      color: rgba(255, 255, 255, 0.25);
      cursor: default;
    }
  }

  .previous-button {
    left: 2rem;
  }

  .next-button {
    right: 2rem;
  }

  .count {
    position: absolute;
    top: 1rem;
    left: 2.25rem;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.875rem;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    .container {
      width: 100%;
      height: 75%;

      img {
        max-height: 90%;
      }
    }

    .actions {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    .close-button,
    .previous-button,
    .next-button {
      padding: 0.625rem;
      background-color: #3f3f46;
      color: #fff;
    }

    .close-button svg {
      height: 1.25rem;
      width: 1.25rem;
    }

    .previous-button,
    .next-button {
      position: relative;
      top: unset;
      left: unset;
      right: unset;
      bottom: unset;
    }
  }
`;
