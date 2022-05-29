import React, { useContext } from 'react';
import List from '../Components/List';
import AppContext from '../context';

function Liked({ onAddToFavorite }) {
  const { favorites } = useContext(AppContext);
  return (
    <>
      <List photos={favorites} onAddToFavorite={onAddToFavorite} />
    </>
  );
}

export default Liked;
