import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying } from '../../actions/movieActions';
import { Card, CardImage, CardBody, CardTitle, CardFooter, MovieRating, MovieDate, Cards } from '../../components/Card/Cards';
import Loading from '../../components/Loading/Loading';

class NowplayingContent extends Component {
  componentDidMount() {
    this.props.fetchNowPlaying();
  }

  renderContent = () => {
    if (this.props.nowPlaying) {
      return (
        <Cards>
          {this.props.nowPlaying.map((movie) => (
            <Card link={`/${movie.category}/detail/${movie.id}`} key={movie.id}>
              <CardImage src={movie.poster} alt={movie.title} />
              <CardBody>
                <CardTitle>{movie.title.length > 25 ? movie.title.slice(0, 25) + '...' : movie.title}</CardTitle>
              </CardBody>
              <CardFooter>
                <MovieRating rating={movie.rating} />
                <MovieDate date={movie.releaseDate} />
              </CardFooter>
            </Card>
          ))}
        </Cards>
      );
    } else {
      return <Loading />;
    }
  };

  render() {
    return (
      <section className="home-section section upcoming">
        <h2 className="home-section--title">Now Playing</h2>
        {this.renderContent()}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.movies.nowPlaying,
  };
};

export default connect(mapStateToProps, { fetchNowPlaying })(NowplayingContent);
