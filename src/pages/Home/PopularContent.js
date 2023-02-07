import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchPopularMovies } from '../../actions/movieActions';
import { fetchPopularTV } from '../../actions/tvActions';
import { Card, CardImage, CardBody, CardTitle, CardFooter, MovieRating, MovieDate, Cards } from '../../components/Card/Cards';
import Loading from '../../components/Loading/Loading';

class PopularContent extends Component {
  state = {
    mostPopular: 'movie',
  };

  togglePopularContent = (content) => {
    this.setState({
      mostPopular: content,
    });
  };

  renderCards(movies) {
    return (
      <Cards>
        {movies.map((movie) => (
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
  }

  renderContent() {
    if (this.props.popularTV && this.props.popularMovies) {
      return (
        <>
          <div className={`${this.state.mostPopular === 'tv' && 'u-hidden'}`}>{this.renderCards(this.props.popularMovies.slice(0, 10))}</div>
          <div className={`${this.state.mostPopular === 'movie' && 'u-hidden'}`}>{this.renderCards(this.props.popularTV.slice(0, 10))}</div>
        </>
      );
    } else {
      return <Loading></Loading>;
    }
  }

  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchPopularTV();
  }

  render() {
    return (
      <section className="home-section section">
        <aside className="side-content">
          <h2 className="home-section--title">Most Popular</h2>
          <nav className="content-nav">
            <button className={`button-pill ${this.state.mostPopular === 'movie' && 'active'}`} onClick={() => this.togglePopularContent('movie')}>
              Movies
            </button>
            <button className={`button-pill ${this.state.mostPopular === 'tv' && 'active'}`} onClick={() => this.togglePopularContent('tv')}>
              TV Shows
            </button>
          </nav>
        </aside>
        <div className="main-content">
          {this.renderContent()}
          <Link
            className="button u-margin-left-auto"
            to={`/${this.state.mostPopular}/popular`}
            aria-label={`see more popular ${this.state.mostPopular}`}
          >
            See More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.movies.popularMovies,
    popularTV: state.tv.popularTV,
  };
};

export default connect(mapStateToProps, { fetchPopularMovies, fetchPopularTV })(PopularContent);
