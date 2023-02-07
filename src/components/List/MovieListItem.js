import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPoll } from '@fortawesome/free-solid-svg-icons';
import { ListItem, ItemIndex, ItemImg, ItemColPrimary, ItemTitle, ItemText, ItemColSecondary } from './Lists';

function MovieListItem({ movie, index }) {
  return (
    <ListItem link={`/${movie.category}/detail/${movie.id}`}>
      <ItemIndex>{++index}</ItemIndex>
      <ItemImg src={movie.poster} alt={movie.title}></ItemImg>
      <ItemColPrimary>
        <ItemTitle>{movie.title}</ItemTitle>
        <ItemText>{new Date(movie.releaseDate).toDateString()}</ItemText>
      </ItemColPrimary>
      <ItemColSecondary>
        <FontAwesomeIcon icon={faStar} />
        <strong className="list-item__strong">{movie.rating}</strong>
      </ItemColSecondary>
      <ItemColSecondary>
        <FontAwesomeIcon icon={faPoll} />
        <strong className="list-item__strong">{Math.round(movie.popularity)}</strong>
      </ItemColSecondary>
    </ListItem>
  );
}

export default MovieListItem;
