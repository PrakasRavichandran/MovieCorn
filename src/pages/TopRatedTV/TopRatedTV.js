import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { List, ListHeader } from '../../components/List/Lists';
import MovieListItem from '../../components/List/MovieListItem';
import Loading from '../../components/Loading/Loading';
import { fetchTopRatedTV } from '../../actions/tvActions';

class MostPopularTV extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchTopRatedTV();
  }

  renderContent() {
    return this.props.topRatedTV.map((movie, index) => <MovieListItem movie={movie} index={index} key={index}></MovieListItem>);
  }

  render() {
    return (
      <section className="section top-list">
        <Helmet>
          <title>Top Rated TVs</title>
        </Helmet>
        <List>
          <ListHeader>Top Rated TVs</ListHeader>
          {this.props.topRatedTV ? this.renderContent() : <Loading />}
        </List>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topRatedTV: state.tv.topRatedTV,
  };
};

export default connect(mapStateToProps, { fetchTopRatedTV })(MostPopularTV);
