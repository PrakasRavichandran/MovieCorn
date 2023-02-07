import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './home.scss';

import TrendingContent from './TrendingContent';
import PopularContent from './PopularContent';
import TopRatedContent from './TopRatedContent';
import NowplayingContent from './NowplayingContent';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>MovieCorn 🍿</title>
        </Helmet>
        <TrendingContent />
        <PopularContent />
        <TopRatedContent />
        <NowplayingContent />
      </div>
    );
  }
}

export default Home;
