/* eslint-disable import/no-anonymous-default-export */

export default (movies) => {
  const newMovies = movies.map((movie) => {
    return {
      category: movie.first_air_date ? 'tv' : 'movie',
      id: movie.id,
      title: movie.title || movie.name,
      poster: movie.poster_path,
      rating: movie.vote_average,
      popularity: movie.popularity,
      releaseDate: movie.release_date || movie.first_air_date,
    };
  });

  return newMovies;
};
