import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { List, ItemImg, ListItem, ItemColPrimary, ItemTitle, ItemText, ItemSubtitle } from '../List/Lists';
import Loading from '../Loading/Loading';

import './modalSearch.scss';

class ModalSearch extends Component {
  renderContent() {
    if (this.props.searchResults) {
      if (this.props.searchResults.length === 0) {
        return (
          <>
            <h1 className="u-text-center">No Results Found.</h1>
          </>
        );
      }

      return (
        <>
          <h1 className="u-margin-bottom-2">{this.props.searchResults.length} Search Results</h1>
          <div className="modal-content">
            <List>
              {this.props.searchResults.map((item, index) => (
                <ListItem link={`/${item.mediaType}/detail/${item.id}`} key={index}>
                  <ItemImg src={item.image} variant="large"></ItemImg>
                  <ItemColPrimary>
                    <ItemTitle>
                      {item.title}
                      <span className="badge">{item.mediaType}</span>
                    </ItemTitle>
                    <ItemSubtitle>
                      {item.releaseDate &&
                        new Date(item.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </ItemSubtitle>
                    <ItemText>
                      {item.overview}
                      {item.knownFor}
                    </ItemText>
                  </ItemColPrimary>
                </ListItem>
              ))}
            </List>
          </div>
        </>
      );
    } else {
      return <Loading />;
    }
  }

  render() {
    return ReactDOM.createPortal(
      <div className="react-portal container" onClick={(e) => e.target.classList.contains('react-portal') && this.props.closeModal()}>
        <div className="modal">{this.renderContent()}</div>
      </div>,
      document.getElementById('modal')
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.search.results,
  };
};

export default connect(mapStateToProps, {})(ModalSearch);
