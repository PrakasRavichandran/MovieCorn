import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import LazyImage from '../LazyImage/LazyImage';

import './cards.scss';

export const Cards = ({ children }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollMax, setScrollMax] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    setScrollMax(container.current.scrollWidth - container.current.clientWidth);
  }, []);

  const shiftRight = () => {
    container.current.scrollBy({
      top: 0,
      left: 500,
      behavior: 'smooth',
    });
  };

  const shiftLeft = () => {
    container.current.scrollBy({
      top: 0,
      left: -500,
      behavior: 'smooth',
    });
  };

  return (
    <div className="cards">
      <button
        className={`cards-container__button cards-container__button--left ${scrollLeft < 50 && 'u-hidden'}`}
        onClick={shiftLeft}
        aria-label="scroll left"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className={`cards-container__button cards-container__button--right ${scrollLeft >= scrollMax && 'u-hidden'}`}
        onClick={shiftRight}
        aria-label="scroll right"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <div
        className={`cards-container`}
        ref={container}
        onScroll={() => {
          setScrollLeft(container.current.scrollLeft);
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Card = ({ children, link }) => {
  return (
    <Link className="card" to={link}>
      {children}
    </Link>
  );
};

export const CardImage = ({ src, alt }) => {
  return <LazyImage src={src} alt={alt} imageSize="w185" thumbSize="w92" className="card__img" />;
};

export const CardBody = ({ children }) => {
  return <div className="card__body">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h3 className="card__title">{children}</h3>;
};

export const CardText = ({ children }) => {
  return <p className="card__text">{children}</p>;
};

export const CardFooter = ({ children }) => {
  return <div className="card__footer">{children}</div>;
};

export const MovieRating = ({ rating }) => {
  return (
    <div className="rating">
      <FontAwesomeIcon icon={faStar} />
      <strong>{rating}</strong>
    </div>
  );
};

export const MovieDate = ({ date }) => {
  return <span className="date">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>;
};
