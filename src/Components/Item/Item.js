import React, { useContext } from 'react';
import AppContext from '../../context';

function Item({ url, id, onAddToFavorite }) {
  const { favorites } = useContext(AppContext);
  const onClickItem = () => {
    onAddToFavorite({ url, id });
  };

  return (
    <div className="item" onClick={onClickItem}>
      <div className={`favorite ${favorites.some((e) => e.id === id) ? 'liked' : 'unliked'}`}></div>
      <img src={url} alt="" />
    </div>
  );
}

export default Item;
