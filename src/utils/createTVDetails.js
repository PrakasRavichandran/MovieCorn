/* eslint-disable import/no-anonymous-default-export */

export default (tv) => {
  return {
    id: tv.id,
    title: tv.name,
    poster: tv.poster_path,
    backdrop: tv.backdrop_path,
    releaseDate: tv.first_air_date,
    numberOfSeasons: tv.number_of_seasons,
    numberOfEpisodes: tv.number_of_episodes,
    genres: tv.genres.map((genre) => genre.name),
    voteAverage: tv.vote_average,
    voteCount: tv.vote_count,
    trailer: tv.videos.results.filter((video) => video.type === 'Trailer')[0]?.key,
    overview: tv.overview,
    overviewData: {
      creators: tv.created_by.map((creator) => creator.name),
      producers: tv.credits.crew.filter((crew) => crew.job === 'Producer').map((crew) => crew.name),
      writers: tv.credits.crew.filter((crew) => crew.job === 'Writer').map((crew) => crew.name),
      screenplay: tv.credits.crew.filter((crew) => crew.job === 'Screenplay').map((crew) => crew.name),
    },
    casts: tv.credits.cast,
    crews: tv.credits.crew,
    metadata: {
      first_air_date: tv.first_air_date,
      last_air_date: tv.last_air_date,
      production_countries: tv.production_countries.map((country) => country.name),
      language: tv.spoken_languages.map((lang) => lang.english_name),
      production_companies: tv.production_companies.map((company) => company.name),
      homepage: tv.homepage,
      tagline: tv.tagline,
    },
    similar: tv.similar.results.sort((a, b) => b.popularity - a.popularity),
  };
};
