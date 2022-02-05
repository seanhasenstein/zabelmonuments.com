import React from 'react';
import { Image } from '../types';

export default function useLightbox(images: Image[]) {
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(0);
  const [shouldReturnFocus, setShouldReturnFocus] = React.useState(false);
  const [initFocusedImg, setInitFocusedImg] =
    React.useState<HTMLButtonElement | null>(null);
  const prevButton = React.useRef<HTMLButtonElement>(null);
  const nextButton = React.useRef<HTMLButtonElement>(null);
  const closeButton = React.useRef<HTMLButtonElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    setShowLightbox(true);
    setSelectedImg(index);
    setShouldReturnFocus(true);
    setInitFocusedImg(e.currentTarget);
  };

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      const { activeElement } = document;
      const closeBtn = closeButton.current;
      const prevBtn = prevButton.current;
      const nextBtn = nextButton.current;

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
              nextBtn ? nextBtn.focus() : prevBtn?.focus();
              return;
            }
            if (prevBtn === activeElement) {
              closeBtn?.focus();
              return;
            }
            prevBtn ? prevBtn.focus() : closeBtn?.focus();

            // TAB KEY
          } else {
            e.preventDefault();
            if (nextBtn === activeElement) {
              closeBtn?.focus();
              return;
            }
            if (prevBtn === activeElement) {
              nextBtn ? nextBtn.focus() : closeBtn?.focus();
              return;
            }
            prevBtn ? prevBtn.focus() : nextBtn?.focus();
          }
          break;
        case 'Escape':
          setShowLightbox(false);
      }
    },
    [images.length, selectedImg]
  );

  React.useEffect(() => {
    if (!showLightbox && shouldReturnFocus) {
      initFocusedImg?.focus();
    }

    if (showLightbox) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = 'inherit';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [showLightbox, initFocusedImg, shouldReturnFocus, onKeyDown]);

  React.useEffect(() => {
    if (showLightbox) {
      closeButton.current?.focus();
    }
  }, [showLightbox]);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        !imgRef.current?.contains(e.target as Node) &&
        !prevButton.current?.contains(e.target as Node) &&
        !nextButton.current?.contains(e.target as Node)
      ) {
        setShowLightbox(false);
      }
    };

    if (showLightbox) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [nextButton, prevButton, setShowLightbox, showLightbox]);

  return {
    images,
    showLightbox,
    setShowLightbox,
    selectedImg,
    setSelectedImg,
    handleClick,
    prevButton,
    nextButton,
    closeButton,
    imgRef,
  };
}
