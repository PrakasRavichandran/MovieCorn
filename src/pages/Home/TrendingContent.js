import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading/Loading';

import { fetchTrendingMovies } from '../../actions/movieActions';
import { Carousel } from '../../components/Carousel/Carousel';

class TrendingContent extends Component {
  componentDidMount() {
    this.props.fetchTrendingMovies();
  }

  render() {
    return (
      <div className="trending-movies">
        {this.props.trendingMovies ? <Carousel title="Trending Movies" content={this.props.trendingMovies.slice(0, 5)} /> : <Loading />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trendingMovies: state.movies.trendingMovies,
  };
};

export default connect(mapStateToProps, { fetchTrendingMovies })(TrendingContent);
