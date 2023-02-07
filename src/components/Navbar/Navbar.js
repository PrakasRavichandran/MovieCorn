import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';

import './navbar.scss';
import SearchBar from './SearchBar';

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      setToggleNav(false);
      setToggleSearchBar(false);
    });
  }, [history]);

  const toggleNavbar = () => {
    setToggleNav(!toggleNav);
    setToggleSearchBar(false);
  };

  const toggleSearch = () => {
    setToggleSearchBar(!toggleSearchBar);
    setToggleNav(false);
  };

  return (
    <>
      <nav className="container navbar">
        <button className={`navbar-toggle ${toggleNav && 'active'}`} onClick={toggleNavbar}>
          <div className="icon icon-1"></div>
          <div className="icon icon-2"></div>
          <div className="icon icon-3"></div>
        </button>
        <Link className="navbar-brand" to="/">
          <div className="md">
          Movie<span>Corn</span>
          </div>
          <div className="sm">
            M<span>C 🍿</span>
          </div>
        </Link>

        <div className={`navbar-nav ${toggleNav && 'active'}`}>
          <div className="nav-item dropdown" role="menu" tabIndex="0">
            <span className="nav-link">
              Movies <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/movie/popular" role="menuitem">
                Most Popular Movies
              </Link>
              <Link className="dropdown-item" to="/movie/top" role="menuitem">
                Top Rated Movies
              </Link>
              <Link className="dropdown-item" to="/movie/upcoming" role="menuitem">
                Upcoming Movies
              </Link>
            </div>
          </div>
          <div className="nav-item dropdown" role="menu" tabIndex="0">
            <span className="nav-link">
              TV Shows <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/tv/popular" role="menuitem">
                Most Popular Shows
              </Link>
              <Link className="dropdown-item" to="/tv/top" role="menuitem">
                Top Rated Shows
              </Link>
            </div>
          </div>
        </div>
        <button className="navbar-search-btn" onClick={toggleSearch} aria-label="open search bar">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {toggleSearchBar && <SearchBar show={toggleSearchBar} toggleSearchBar={toggleSearch} />}
      </nav>
    </>
  );
}

export default Navbar;
