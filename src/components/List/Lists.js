import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage/LazyImage';

import './lists.scss';

export const List = ({ children }) => <div className="list">{children}</div>;

export const ListHeader = ({ children }) => <h1 className="list-header">{children}</h1>;

export const ListItem = ({ children, link }) => (
  <Link className="list-item" to={link}>
    {children}
  </Link>
);

export const ItemIndex = ({ children }) => <span className="list-item__index">{children}</span>;

export const ItemImg = ({ src, alt, variant }) => (
  <LazyImage src={src} alt={alt} imageSize={'w185'} thumbSize={'w92'} className={`list-item__img ${variant}`} />
);

export const ItemColPrimary = ({ children }) => <div className="list-item__col--primary">{children}</div>;

export const ItemColSecondary = ({ children }) => <div className="list-item__col--secondary">{children}</div>;

export const ItemTitle = ({ children }) => <h2 className="list-item__title">{children}</h2>;

export const ItemSubtitle = ({ children }) => <h3 className="list-item__subtitle">{children}</h3>;

export const ItemText = ({ children }) => <p className="list-item__text">{children}</p>;
