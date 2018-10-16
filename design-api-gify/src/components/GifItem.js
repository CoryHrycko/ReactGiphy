import React from 'react';
//this is each individual item in the diagram.
const GifItem = (image) => {
  return (
    <div className="gif-item">
      <img src={image.gif.images.downsized.url} />
    </div>
  )
};

export default GifItem;