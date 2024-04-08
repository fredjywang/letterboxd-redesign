// components/Films.js
import React, { useState } from 'react';
import MovieScroll from './../components/MovieScroll';
import MovieCard from '../components/MovieCard';
import { useDeletedMovies } from '../DeletedMoviesContext';

import dunePoster from '../assets/dune-2-poster.jpg';
import gbPoster from '../assets/gb-poster.jfif';
import immmaculatePoster from '../assets/immaculate-poster.jpg';
import kfp4Poster from '../assets/kfp4-poster.jpg';
import mmPoster from '../assets/mm-poster.jfif';
import abigailPoster from '../assets/abigail-poster.jpg';
import gxkPoster from '../assets/gxk-poster.jpg';
import tfoPoster from '../assets/tfo-poster.jfif';
import oppPoster from '../assets/opp-poster.jpg';
import tgPoster from '../assets/tg-poster.jpg';
import craPoster from '../assets/cra-poster.jpg';
import wowsPoster from '../assets/wows-poster.jpg';

const Films = () => {
    const { deletedMovies, addDeletedMovie } = useDeletedMovies();

    const [movies, setMovies] = useState([
        {
            imageUrl: oppPoster,
            title: 'Oppenheimer',
        },
        {
            imageUrl: tgPoster,
            title: 'Top Gun',
        },
        {
            imageUrl: craPoster,
            title: 'Crazy Rich Asians',
        },
        {
            imageUrl: wowsPoster,
            title: 'The Wolf of Wall Street',
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

    const [newMovies, setNewMovies] = useState([
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

    const [popularReviews, setPopularReviews] = useState([
        {
            imageUrl: dunePoster,
            title: 'Dune 2',
        },
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

    const deleteNewMovie = (movieTitle) => {
        const movieToBeDeleted = movies.find((movie) => movie.title === movieTitle);
        addDeletedMovie(movieToBeDeleted)
        
        const updatedMovies = newMovies.filter((movie) => movie.title !== movieTitle)
        setNewMovies(updatedMovies); 
    };

    const deleteReview = (movieTitle) => {
        // const movieToBeDeleted = movies.find((movie) => movie.title === movieTitle);
        // addDeletedMovie(movieToBeDeleted)

        const updatedMovies = popularReviews.filter((movie) => movie.title !== movieTitle)
        setPopularReviews(updatedMovies); 
    };

    return (
        <div className="bg-base">
        <div className="container mx-auto">
            <div className="p-12">
                <h1 className="text-3xl font-light text-center text-white">Welcome back, <span className="font-normal">hcistudent</span>. Here's what we've been watching...</h1>
            </div>
            <div className="pl-32 pr-32 pb-8">
                <MovieScroll text="POPULAR ON LETTERBOXD">
                    {movies.map(movie => {
                        const isRemoved = deletedMovies.some((deletedMovie) => deletedMovie.title === movie.title);
                        // only render if not removed
                        if (!isRemoved) {
                            return (
                                <MovieCard
                                    key={movie.id}
                                    imageUrl={movie.imageUrl}
                                    title={movie.title}
                                    description={movie.description}
                                    onDelete={deleteMovie}
                                    isRestoreSlide={false}
                                />
                            )
                        }
                        return (<div></div>)
                    })}
                </MovieScroll>
            </div>
            <div className="pl-32 pr-32 pb-8">
                <MovieScroll text="NEW ON LETTERBOXD">
                    {newMovies.map(movie => {
                        const isRemoved = deletedMovies.some((deletedMovie) => deletedMovie.title === movie.title);
                        // only render if not removed
                        if (!isRemoved) {
                            return (
                                <MovieCard
                                    key={movie.id}
                                    imageUrl={movie.imageUrl}
                                    title={movie.title}
                                    description={movie.description}
                                    onDelete={deleteNewMovie}
                                    isRestoreSlide={false}
                                />
                            )
                        }
                        return (<div></div>)
                    })}
                </MovieScroll>
            </div>
            <div className="pl-32 pr-32 pb-8">
                <MovieScroll text="POPULAR REVIEWS THIS WEEK">
                    {popularReviews.map(movie => (
                        <MovieCard
                            key={movie.id}
                            imageUrl={movie.imageUrl}
                            title={movie.title}
                            description={movie.description}
                            onDelete={deleteReview}
                            isRestoreSlide={false}
                        />
                    ))}
                </MovieScroll>
            </div>
        </div>
        </div>
    );
};

export default Films;
