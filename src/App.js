import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './sass/main.scss';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Credits from './pages/Credits/Credits';
import MostPopularMovies from './pages/MostPopularMovies/MostPopularMovies';
import PersonDetails from './pages/PersonDetails/PersonDetails';
import TopRatedMovies from './pages/TopRatedMovies/TopRatedMovies';
import UpcomingMovies from './pages/UpcomingMovies/UpcomingMovies';
import MostPopularTV from './pages/MostPopularTV/MostPopularTV';
import TopRatedTV from './pages/TopRatedTV/TopRatedTV';
import TVDetails from './pages/TVDetails/TVDetails';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <div className="container content">
          <ErrorBoundary>
            <Route path="/" exact component={Home}></Route>
            <Route path="/movie/detail/:id" exact component={MovieDetails}></Route>
            <Route path="/movie/popular" exact component={MostPopularMovies}></Route>
            <Route path="/movie/top" exact component={TopRatedMovies}></Route>
            <Route path="/movie/upcoming" exact component={UpcomingMovies}></Route>
            <Route path="/:category/credits/:id" exact component={Credits}></Route>
            <Route path="/tv/popular" exact component={MostPopularTV}></Route>
            <Route path="/tv/top" exact component={TopRatedTV}></Route>
            <Route path="/tv/detail/:id" exact component={TVDetails}></Route>
            <Route path="/person/detail/:id" exact component={PersonDetails}></Route>
          </ErrorBoundary>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default connect(null)(App);
