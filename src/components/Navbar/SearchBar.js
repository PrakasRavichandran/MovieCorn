import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeSearchQuery, searchQuery } from '../../actions/searchActions';
import ModalSearch from '../ModalSearch/ModalSearch';

class SearchBar extends Component {
  state = {
    searchQuery: '',
    openModal: false,
  };

  searchContent = (e) => {
    e.preventDefault();
    if (this.state.searchQuery) {
      this.setState({ openModal: true });
      this.props.searchQuery(this.state.searchQuery);
    }
    // document.querySelector('body').style.overflow = 'hidden';
  };

  componentWillUnmount() {
    this.props.removeSearchQuery();
    // document.querySelector('body').style.overflow = 'scroll';
  }

  render() {
    return (
      <form className={`search-form ${this.props.show && 'active'}`} onSubmit={(e) => this.searchContent(e)}>
        <input
          aria-label="search input"
          className="search-bar"
          placeholder="Search for a movie title or person"
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
          value={this.state.searchQuery}
          autoFocus
        />
        <button type="submit" className="search-submit">
          Search
        </button>
        <button type="button" className="search-close" onClick={this.props.toggleSearchBar} aria-label="close search bar">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {this.state.openModal && this.props.show && <ModalSearch closeModal={this.props.toggleSearchBar} />}
      </form>
    );
  }
}

export default connect(null, { searchQuery, removeSearchQuery })(SearchBar);
