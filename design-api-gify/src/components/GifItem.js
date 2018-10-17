import React from 'react';
//this is each individual item in the diagram.
const GifItem = ({gif, onGifSelect}) => {
  return (
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} alt="please enable Javascript" />
    </div>
  )
};

export default GifItem;