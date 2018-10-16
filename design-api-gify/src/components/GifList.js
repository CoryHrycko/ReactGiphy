import React from 'react';
import GifItem from './GifItem';
// this is a stateless component which means it is
// flexible in its contents
const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;