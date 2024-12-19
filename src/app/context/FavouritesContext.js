import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('favorites');
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const addFavorite = (job) => {
    setFavorites((prev) => [...prev, job]);
  };

  const removeFavorite = (jobId) => {
    setFavorites((prev) => prev.filter((job) => job.id !== jobId));
  };

  const isFavorite = (jobId) => {
    return favorites.some((job) => job.id === jobId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
