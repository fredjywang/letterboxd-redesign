// DeletedMoviesContext.js
import React, { createContext, useContext, useState } from 'react';

const DeletedMoviesContext = createContext();

export const useDeletedMovies = () => useContext(DeletedMoviesContext);

export const DeletedMoviesProvider = ({ children }) => {
  const [deletedMovies, setDeletedMovies] = useState([]);

  const addDeletedMovie = (newMovie) => {
    const isDuplicate = deletedMovies.some((movie) => movie.title === newMovie.title);
    // only add if not an already deleted movie
    if (!isDuplicate) {
      setDeletedMovies([...deletedMovies, newMovie]);
    }
  };

  const removeDeletedMovie = (movieTitle) => {
    const updatedMovies = deletedMovies.filter((movie) => movie.title !== movieTitle)
    setDeletedMovies(updatedMovies);
  };

  return (
    <DeletedMoviesContext.Provider value={{ deletedMovies, addDeletedMovie, removeDeletedMovie }}>
      {children}
    </DeletedMoviesContext.Provider>
  );
};
