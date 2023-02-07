import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Card, CardImage, CardBody, CardTitle, CardText, Cards } from '../../components/Card/Cards';
import {
  Detail,
  DetailMain,
  DetailSection,
  Header,
  SectionList,
  SectionListItem,
  SectionParagraph,
  SectionTitle,
} from '../../components/Detail/Detail';
import Loading from '../../components/Loading/Loading';
import { fetchPerson, removePerson } from '../../actions/personActions';

class PersonDetails extends Component {
  componentDidMount() {
    this.props.fetchPerson(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.removePerson();
      window.scrollTo(0, 0);
      this.props.fetchPerson(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.removePerson();
  }

  renderListItem = ([key, value]) => {
    if (!value || value.length === 0) return '';

    const label = (key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, ' ');
    const newValue = Array.isArray(value) ? value.join(', ') : value;

    return <SectionListItem label={label} value={newValue} />;
  };

  renderCredits = (movie) => (
    <Card link={`/movie/detail/${movie.id}`} key={movie.id}>
      <CardImage src={movie.poster_path} alt={movie.title} />
      <CardBody>
        <CardTitle>{movie.title.length > 25 ? movie.title.slice(0, 25) + '...' : movie.title}</CardTitle>
        <CardText>{movie.character}</CardText>
      </CardBody>
    </Card>
  );

  renderContent = () => {
    if (this.props.error) {
      throw this.props.error;
    } else if (this.props.person) {
      return (
        <>
          <Helmet>
            <title>{this.props.person.name}</title>
            <meta name="description" content={this.props.person.biography} />
          </Helmet>
          <Header title={this.props.person.name} backdrop={this.props.person.backdrop} poster={this.props.person.poster}>
            <SectionList>{Object.entries(this.props.person.overviewData).map(this.renderListItem)}</SectionList>
          </Header>
          <DetailMain>
            <DetailSection>
              <SectionTitle>Biography</SectionTitle>
              <SectionParagraph>{this.props.person.biography}</SectionParagraph>
            </DetailSection>
            <DetailSection>
              <SectionTitle>Known For</SectionTitle>
              <Cards>{this.props.person.credits.slice(0, 10).map(this.renderCredits)}</Cards>
              <Link className="button u-margin-left-auto u-margin-top-2" to={`/persons/credits/${this.props.person.id}`}>
                See All Cast & Crew <FontAwesomeIcon icon={faArrowRight} />
              </Link>
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
  return {
    person: state.persons.person,
    error: state.persons.error,
  };
};

export default connect(mapStateToProps, { fetchPerson, removePerson })(PersonDetails);
