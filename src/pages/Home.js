// components/Home.js
import React, { useState } from 'react';
import MovieScroll from './../components/MovieScroll'
import MovieCard from '../components/MovieCard';
import Feed from '../components/Feed';
import { useDeletedMovies } from '../DeletedMoviesContext';

import dunePoster from '../assets/dune-2-poster.jpg';
import gbPoster from '../assets/gb-poster.jfif';
import immmaculatePoster from '../assets/immaculate-poster.jpg';
import kfp4Poster from '../assets/kfp4-poster.jpg';
import mmPoster from '../assets/mm-poster.jfif';
import abigailPoster from '../assets/abigail-poster.jpg';
import gxkPoster from '../assets/gxk-poster.jpg';
import tfoPoster from '../assets/tfo-poster.jfif';

const Home = () => {
  const { deletedMovies, addDeletedMovie } = useDeletedMovies();
  
  const [movies, setMovies] = useState([
    {
        imageUrl: dunePoster,
        title: 'Dune 2',
    },
    {
        imageUrl: gbPoster,
        title: 'Ghostbusters',
    },
    {
        imageUrl: immmaculatePoster,
        title: 'Immaculate',
    },
    {
        imageUrl: kfp4Poster,
        title: 'Kung Fu Panda 4',
    },
    {
        imageUrl: mmPoster,
        title: 'Monkey Man',
    },
    {
        imageUrl: abigailPoster,
        title: 'Abigail',
    },
    {
        imageUrl: gxkPoster,
        title: 'Godzilla x Kong',
    },
    {
        imageUrl: tfoPoster,
        title: 'The First Omen',
    },
  ]);

  const deleteMovie = (movieTitle) => {
    const movieToBeDeleted = movies.find((movie) => movie.title === movieTitle);
    addDeletedMovie(movieToBeDeleted)

    const updatedMovies = movies.filter((movie) => movie.title !== movieTitle)
    setMovies(updatedMovies); 
  }; 

  return (
    <div className="bg-base">
      <div className="container mx-auto">
        <div className="p-12">
          <h1 className="text-3xl font-light text-center text-white">Welcome back, <span className="font-normal">hcistudent</span>. Here's what your friends have been watching...</h1>
        </div>
        <div className="pl-32 pr-32">
          <MovieScroll text="POPULAR WITH FRIENDS">
            {movies.map(movie => {
              const isRemoved = deletedMovies.some((deletedMovie) => deletedMovie.title === movie.title);
              // only render from map if not removed
              if (!isRemoved) {
                return (
                  <MovieCard
                    imageUrl={movie.imageUrl}
                    title={movie.title}
                    description={movie.description}
                    onDelete={deleteMovie}
                    isRestoreSlide={false}
                  />
                )
              }
              return (<div></div>)
            }
            )}
          </MovieScroll>
        </div>
        <div className="flex items-center justify-center pl-72 pr-72 pb-4">
          <Feed/>
        </div>
      </div>
    </div>
  );
};

export default Home;
