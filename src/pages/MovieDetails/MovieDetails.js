import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faLayerGroup, faPlay, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Loading from '../../components/Loading/Loading';
import { Card, CardImage, CardBody, CardTitle, CardText, Cards, CardFooter, MovieRating, MovieDate } from '../../components/Card/Cards';
import {
  Detail,
  DetailMain,
  DetailSection,
  Header,
  HeaderActions,
  HeaderSubTitle,
  SectionList,
  SectionListItem,
  SectionParagraph,
  SectionTitle,
} from '../../components/Detail/Detail';
import { fetchMovie, removeMovie } from '../../actions/movieActions';

class Details extends Component {
  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.removeMovie();
      this.fetchContent();
    }
  }

  componentWillUnmount() {
    this.props.removeMovie();
  }

  componentDidCatch(error) {
    console.log(error);
  }

  fetchContent() {
    window.scrollTo(0, 0);
    try {
      this.props.fetchMovie(this.props.match.params.id);
    } catch (error) {
      console.log('error');
    }
  }

  renderListItem = ([key, value]) => {
    if (!value || value.length === 0) return '';

    const label = (key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, ' ');
    const newValue = Array.isArray(value) ? value.join(', ') : value;

    return <SectionListItem label={label} value={newValue} key={label} />;
  };

  renderTopCasts = (person) => (
    <Card link={`/person/detail/${person.id}`} key={person.id}>
      <CardImage src={person.profile_path} alt={person.title} />
      <CardBody>
        <CardTitle>{person.name.length > 25 ? person.name.slice(0, 25) + '...' : person.name}</CardTitle>
        <CardText>{person.character}</CardText>
      </CardBody>
    </Card>
  );

  renderSimilar = (movie) => (
    <Card link={`/movie/detail/${movie.id}`} key={movie.id}>
      <CardImage src={movie.poster_path} alt={movie.title} />
      <CardBody>
        <CardTitle>{movie.title.length > 25 ? movie.title.slice(0, 25) + '...' : movie.title}</CardTitle>
      </CardBody>
      <CardFooter>
        <MovieRating rating={movie.vote_average.toFixed(1)} />
        <MovieDate date={movie.release_date} />
      </CardFooter>
    </Card>
  );

  renderContent = () => {
    if (this.props.error) {
      throw this.props.error;
    } else if (this.props.movie) {
      return (
        <>
          <Helmet>
            <title>{`${this.props.movie.title} - MovieCorn 🍿`}</title>
            <meta name="description" content={this.props.movie.overview} />

            <meta property="og:url" content={`https://cranky-hermann-6ed2a6.netlify.app/movie/detail/${this.props.movie.id}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${this.props.movie.title} - MovieCorn 🍿`} />
            <meta property="og:description" content={this.props.movie.overview} />
            <meta property="og:image" content={`https://image.tmdb.org/t/p/w200${this.props.movie.backdrop}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="cranky-hermann-6ed2a6.netlify.app" />
            <meta property="twitter:url" content={`https://cranky-hermann-6ed2a6.netlify.app/movie/detail/${this.props.movie.id}`} />
            <meta name="twitter:title" content={`${this.props.movie.title} - MovieCorn 🍿`} />
            <meta name="twitter:description" content={this.props.movie.overview} />
            <meta name="twitter:image" content={`https://image.tmdb.org/t/p/w200${this.props.movie.backdrop}`} />
          </Helmet>
          <Header title={this.props.movie.title} backdrop={this.props.movie.backdrop} poster={this.props.movie.poster}>
            <HeaderSubTitle>
              <span>
                <FontAwesomeIcon icon={faCalendar} />
                {this.props.movie.releaseDate}
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} />
                {this.props.movie.runtime}m
              </span>
              <span>
                <FontAwesomeIcon icon={faLayerGroup} />
                {this.props.movie.genres.join(', ')}
              </span>
            </HeaderSubTitle>
            <HeaderActions>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                <div className="rating-details">
                  <strong className="rating-details__average">{this.props.movie.voteAverage}</strong>
                  <small className="rating-details__count">{this.props.movie.voteCount}</small>
                </div>
              </div>
              {this.props.movie.trailer ? (
                <a
                  className="button button-trailer"
                  href={`https://www.youtube.com/watch?v=${this.props.movie.trailer}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faPlay} />
                  Play Trailer
                </a>
              ) : (
                <p>Trailer is not available.</p>
              )}
            </HeaderActions>
          </Header>
          <DetailMain>
            <DetailSection>
              <SectionTitle>Overview</SectionTitle>
              <SectionParagraph>{this.props.movie.overview}</SectionParagraph>
              <SectionList>{Object.entries(this.props.movie.overviewData).map(this.renderListItem)}</SectionList>
            </DetailSection>
            <DetailSection>
              <SectionTitle>Top Casts</SectionTitle>
              <Cards>{this.props.movie.casts.slice(0, 10).map(this.renderTopCasts)}</Cards>
              <Link className="button u-margin-left-auto u-margin-top-2" to={`/movies/credits/${this.props.movie.id}`}>
                See All Cast & Crew <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </DetailSection>
            <DetailSection>
              <SectionTitle>Details</SectionTitle>
              <SectionList>{Object.entries(this.props.movie.metadata).map(this.renderListItem)}</SectionList>
            </DetailSection>
            <DetailSection>
              <SectionTitle>Similar Movies</SectionTitle>
              <Cards>{this.props.movie.similar.slice(0, 10).map(this.renderSimilar)}</Cards>
            </DetailSection>
          </DetailMain>
        </>
      );
    } else {
      return <Loading />;
    }
  };

  render() {
    return <Detail>{this.renderContent()}</Detail>;
  }
}

const mapStateToProps = (state) => {
  return { movie: state.movies.movie, error: state.movies.error };
};

export default connect(mapStateToProps, { fetchMovie, removeMovie })(Details);
