import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { List, ListHeader } from '../../components/List/Lists';
import MovieListItem from '../../components/List/MovieListItem';
import Loading from '../../components/Loading/Loading';
import { fetchPopularTV } from '../../actions/tvActions';

class MostPopularTV extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPopularTV();
  }

  renderContent() {
    return this.props.popularTV.map((movie, index) => <MovieListItem movie={movie} index={index} key={index}></MovieListItem>);
  }

  render() {
    return (
      <section className="section popular-list">
        <Helmet>
          <title>Most Popular TVs</title>
        </Helmet>
        <List>
          <ListHeader>Most Popular TVs</ListHeader>
          {this.props.popularTV ? this.renderContent() : <Loading />}
        </List>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularTV: state.tv.popularTV,
  };
};

export default connect(mapStateToProps, { fetchPopularTV })(MostPopularTV);
