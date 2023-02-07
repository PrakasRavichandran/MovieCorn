/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import noImage from './noimage.png';

function LazyImage({ src, alt, thumbSize, imageSize, className }) {
  const imageRef = useRef();

  const catSrc = (src, size) => {
    if (!src) {
      return 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    }

    return `https://image.tmdb.org/t/p/${size}${src}`;
  };

  useEffect(() => {
    const loadImage = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return false;

      if (src) {
        entry.target.src = catSrc(src, imageSize);
      } else {
        entry.target.src = noImage;
      }

      entry.target.addEventListener('load', () => {
        entry.target.classList.remove('u-lazy-img--loading');
      });

      entry.target.addEventListener('error', () => {
        entry.target.src = noImage;
        entry.target.classList.remove('u-lazy-img--loading');
      });
    };

    const imageObserver = new IntersectionObserver(loadImage, {
      root: null,
      threshold: 0.5,
    });

    imageObserver.observe(imageRef.current);
  }, []);

  return <img className={`${className} u-lazy-img u-lazy-img--loading`} src={catSrc(src, thumbSize)} alt={alt} ref={imageRef}></img>;
}

export default LazyImage;
