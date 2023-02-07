import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="container footer">
        <div className="footer-left">
          <Link className="footer-brand" to="/">
          Movie<span>Corn 🍿</span>
          </Link>
          Powered by <a href="https://www.themoviedb.org/">TMDB</a>
        </div>
        <div className="footer-nav"></div>
        <div className="footer-social">
          <a className="social-link" href="https://www.linkedin.com/in/prakashravichandran10/" aria-label="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="social-link" href="http://github.com/prakasRavichandran" aria-label="github">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </footer>
    );
  }
}
