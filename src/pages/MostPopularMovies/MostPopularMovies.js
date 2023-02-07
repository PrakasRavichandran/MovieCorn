import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { List, ListHeader } from '../../components/List/Lists';
import MovieListItem from '../../components/List/MovieListItem';
import Loading from '../../components/Loading/Loading';
import { fetchPopularMovies } from '../../actions/movieActions';

class MostPopularMovies extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPopularMovies();
  }

  renderContent() {
    return this.props.popularMovies.map((movie, index) => <MovieListItem movie={movie} index={index} key={index}></MovieListItem>);
  }

  render() {
    return (
      <section className="section">
        <Helmet>
          <title>Most Popular Movies</title>
        </Helmet>
        <List>
          <ListHeader>Most Popular Movies</ListHeader>
          {this.props.popularMovies ? this.renderContent() : <Loading />}
        </List>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.movies.popularMovies,
  };
};

export default connect(mapStateToProps, { fetchPopularMovies })(MostPopularMovies);
