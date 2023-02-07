import React from 'react';
import { ListItem, ItemImg, ItemColPrimary, ItemTitle, ItemText } from './Lists';

function CreditListItem({ credits }) {
  console.log(credits);
  return (
    <ListItem link={`/${credits.media_type}/detail/${credits.id}`}>
      <ItemImg src={credits.poster_path} alt={credits.title || credits.name}></ItemImg>
      <ItemColPrimary>
        <ItemTitle>{credits.title || credits.name}</ItemTitle>
        <ItemText>{credits.character || credits.job}</ItemText>
      </ItemColPrimary>
    </ListItem>
  );
}

export default CreditListItem;
