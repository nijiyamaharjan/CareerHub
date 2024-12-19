"use client"

import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

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
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
