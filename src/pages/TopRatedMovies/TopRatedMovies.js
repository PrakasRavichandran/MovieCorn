import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { List, ListHeader } from '../../components/List/Lists';
import MovieListItem from '../../components/List/MovieListItem';
import Loading from '../../components/Loading/Loading';
import { fetchTopRatedMovies } from '../../actions/movieActions';

class TopRatedMovies extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchTopRatedMovies();
  }

  renderContent() {
    return this.props.topRatedMovies.map((movie, index) => <MovieListItem movie={movie} index={index} key={index}></MovieListItem>);
  }

  render() {
    return (
      <section className="section">
        <Helmet>
          <title>Top Rated Movies</title>
        </Helmet>
        <List>
          <ListHeader>Top Rated Movies</ListHeader>
          {this.props.topRatedMovies ? this.renderContent() : <Loading />}
        </List>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topRatedMovies: state.movies.topRatedMovies,
  };
};

export default connect(mapStateToProps, { fetchTopRatedMovies })(TopRatedMovies);
