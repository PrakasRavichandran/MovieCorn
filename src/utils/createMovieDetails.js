/* eslint-disable import/no-anonymous-default-export */

export default (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    backdrop: movie.backdrop_path,
    releaseDate: movie.release_date,
    runtime: movie.runtime,
    genres: movie.genres.map((genre) => genre.name),
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
    trailer: movie.videos.results.filter((video) => video.type === 'Trailer')[0]?.key,
    overview: movie?.overview,
    overviewData: {
      director: movie.credits.crew.filter((crew) => crew.job === 'Director')[0]?.name,
      producers: movie.credits.crew.filter((crew) => crew.job === 'Producer').map((crew) => crew?.name),
      writers: movie.credits.crew.filter((crew) => crew.job === 'Writer').map((crew) => crew?.name),
      screenplay: movie.credits.crew.filter((crew) => crew.job === 'Screenplay').map((crew) => crew?.name),
    },
    casts: movie.credits.cast,
    crews: movie.credits.crew,
    metadata: {
      production_countries: movie.production_countries.name,
      language: movie.spoken_languages.map((lang) => lang.english_name),
      production_companies: movie.production_companies.map((company) => company.name),
      budget: movie.budget,
      homepage: movie.homepage,
      tagline: movie.tagline,
    },
    similar: movie.similar.results.sort((a, b) => b.popularity - a.popularity),
  };
};
