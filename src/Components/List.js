import React from 'react';
import Item from './Item';

function List({ photos, onAddToFavorite, page }) {
  return (
    <>
      <div className="list container">
        {photos &&
          photos.map((photo) => (
            <Item
              url={photo.url}
              key={photo.id}
              id={photo.id}
              onAddToFavorite={(photo) => onAddToFavorite(photo)}
            />
          ))}
      </div>
      {page ? '' : <p className="pagination">... загружаем еще котиков ...</p>}
    </>
  );
}

export default List;
