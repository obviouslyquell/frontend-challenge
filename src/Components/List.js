import React from 'react';
import Item from './Item/Item';

function List({ photos, onAddToFavorite, page }) {
  console.log(page);
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
      {page == 'home' ? <p className="pagination">... загружаем еще котиков ...</p> : ''}
    </>
  );
}

export default List;
