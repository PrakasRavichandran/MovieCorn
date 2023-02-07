import React from 'react';
import { ListItem, ItemImg, ItemColPrimary, ItemTitle, ItemText } from './Lists';

function PersonListItem({ person }) {
  return (
    <ListItem link={`/person/detail/${person.id}`}>
      <ItemImg src={person.profile_path} alt={person.name}></ItemImg>
      <ItemColPrimary>
        <ItemTitle link={`/person/detail/${person.id}`}>{person.name}</ItemTitle>
        <ItemText>{person.character || person.job}</ItemText>
      </ItemColPrimary>
    </ListItem>
  );
}

export default PersonListItem;
