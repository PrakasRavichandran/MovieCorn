import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../components/Loading/Loading';
import MovieListItem from '../../components/List/MovieListItem';
import { List } from '../../components/List/Lists';
import { fetchTopRatedMovies } from '../../actions/movieActions';
import { fetchTopRatedTV } from '../../actions/tvActions';

class TopRatedContent extends Component {
  state = {
    topRated: 'movie',
  };

  togglePopularContent = (content) => {
    this.setState({
      topRated: content,
    });
  };

  renderLists(movies) {
    return (
      <List>
        {movies.map((movie, index) => (
          <MovieListItem movie={movie} index={index} key={index}></MovieListItem>
        ))}
      </List>
    );
  }

  renderContent() {
    if (this.props.topRatedTV && this.props.topRatedMovies) {
      return (
        <>
          <div className={`${this.state.topRated === 'tv' && 'u-hidden'}`}>{this.renderLists(this.props.topRatedMovies.slice(0, 5))}</div>
          <div className={`${this.state.topRated === 'movie' && 'u-hidden'}`}>{this.renderLists(this.props.topRatedTV.slice(0, 5))}</div>
        </>
      );
    } else {
      return <Loading></Loading>;
    }
  }

  componentDidMount() {
    this.props.fetchTopRatedMovies();
    this.props.fetchTopRatedTV();
  }

  render() {
    return (
      <section className="home-section section">
        <aside className="side-content">
          <h2 className="home-section--title">Top Rated</h2>
          <nav className="content-nav">
            <button className={`button-pill ${this.state.topRated === 'movie' && 'active'}`} onClick={() => this.togglePopularContent('movie')}>
              Movies
            </button>
            <button className={`button-pill ${this.state.topRated === 'tv' && 'active'}`} onClick={() => this.togglePopularContent('tv')}>
              TV Shows
            </button>
          </nav>
        </aside>
        <div className="main-content">
          {this.renderContent()}
          <Link className="button u-margin-left-auto" to={`/${this.state.topRated}/top`} aria-label={`see more popular ${this.state.topRated}`}>
            See More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topRatedMovies: state.movies.topRatedMovies,
    topRatedTV: state.tv.topRatedTV,
  };
};

export default connect(mapStateToProps, { fetchTopRatedMovies, fetchTopRatedTV })(TopRatedContent);
