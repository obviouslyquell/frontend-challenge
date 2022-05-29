import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import List from './Components/List';
import AppContext from './context';
import Liked from './Pages/Liked';

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [favorites, setFavorites] = useState([]);

  axios.defaults.headers.common['x-api-key'] = 'f3f9ee60-8c7e-4507-a457-7ba16eca3bee';
  useEffect(() => {
    if (fetching) {
      try {
        axios
          .get(
            `https://api.thecatapi.com/v1/images/search?limit=15&page=${currentPage}&order=asc&size=full`,
          )
          .then((res) => {
            setPhotos([...photos, ...res.data]);
            setCurrentPage((prev) => prev + 1);
          })
          .finally(() => setFetching(false));
      } catch (error) {
        console.error(error);
      }
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const onAddToFavorite = (e) => {
    if (!favorites.find((elem) => elem.id === e.id)) {
      setFavorites([...favorites, e]);
    } else {
      setFavorites((prev) => prev.filter((item) => item.id !== e.id));
    }
    console.log(e);
  };

  return (
    <AppContext.Provider value={{ favorites, setFavorites }}>
      <Header />
      <Routes>
        <Route path="/" element={<List photos={photos} onAddToFavorite={onAddToFavorite} />} />
        <Route path="liked" element={<Liked onAddToFavorite={onAddToFavorite} />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
