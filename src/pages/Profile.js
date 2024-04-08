// components/Profile.js
import React, { useState } from 'react';
import MovieScroll from './../components/MovieScroll';
import MovieCard from '../components/MovieCard';
import { CgProfile } from "react-icons/cg";
import { useDeletedMovies } from '../DeletedMoviesContext';

import dunePoster from '../assets/dune-2-poster.jpg';
import gbPoster from '../assets/gb-poster.jfif';
import kfp4Poster from '../assets/kfp4-poster.jpg';
import mmPoster from '../assets/mm-poster.jfif';
import abigailPoster from '../assets/abigail-poster.jpg';
import gxkPoster from '../assets/gxk-poster.jpg';
import tfoPoster from '../assets/tfo-poster.jfif';
import craPoster from '../assets/cra-poster.jpg';
import plPoster from '../assets/pl-poster.jfif';
import barbiePoster from '../assets/barbie-poster.jpg';
import moneyballPoster from '../assets/moneyball-poster.jpg';
import wowsPoster from '../assets/wows-poster.jpg';

const Profile = () => {
  const { deletedMovies, removeDeletedMovie } = useDeletedMovies();

  const [favMovies, setFavMovies] = useState([
    {
        imageUrl: craPoster,
        title: 'Crazy Rich Asians',
    },
    {
        imageUrl: plPoster,
        title: 'Past Lives',
    },
    {
        imageUrl: kfp4Poster,
        title: 'Kung Fu Panda 4',
    },
    {
        imageUrl: barbiePoster,
        title: 'Barbie',
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

  const [recentMovies, setRecentMovies] = useState([
    {
        imageUrl: moneyballPoster,
        title: 'Moneyball',
    },
    {
        imageUrl: gbPoster,
        title: 'Ghostbusters',
    },
    {
        imageUrl: kfp4Poster,
        title: 'Kung Fu Panda 4',
    },
  ]);

  const [listMovies, setListMovies] = useState([
    {
        imageUrl: dunePoster,
        title: 'Dune 2',
    },
    {
        imageUrl: wowsPoster,
        title: 'The Wolf of Wall Street',
    },
  ]);

  const [suggestedFriends, setSuggestedFriends] = useState(['FredWang', 'AaronLaw', 'RosyRen', 'ManjotParmar', 'FaraanSiddiqui'])
    
  const deleteFavMovie = (movieTitle) => {
    const updatedMovies = favMovies.filter((movie) => movie.title !== movieTitle)
    setFavMovies(updatedMovies); 
  };

  const deleteRecentMovie = (movieTitle) => {
    const updatedMovies = recentMovies.filter((movie) => movie.title !== movieTitle)
    setRecentMovies(updatedMovies); 
  };

  const deleteListMovie = (movieTitle) => {
    const updatedMovies = listMovies.filter((movie) => movie.title !== movieTitle)
    setListMovies(updatedMovies); 
  };

  const followFriend = (friendToFollow) => {
    const updatedFriends = suggestedFriends.filter((friend) => friend !== friendToFollow)
    setSuggestedFriends(updatedFriends)
    alert(`Successfully followed ${friendToFollow}.`)
  }

  const restoreMovie = (movieTitle) => {
    removeDeletedMovie(movieTitle)
  }

    return (
        <div className="bg-base">
        <div className="container mx-auto">
          <div className="p-12"></div>
            <div className='flex flex-row'>
              <div className='mb-16'>
                <div className="pl-32 pr-16 pb-8">
                    <MovieScroll text="FAVOURITE FILMS">
                        {favMovies.map(movie => (
                            <MovieCard
                                key={movie.id}
                                imageUrl={movie.imageUrl}
                                title={movie.title}
                                description={movie.description}
                                onDelete={deleteFavMovie}
                                isRestoreSlide={false}
                            />
                        ))}
                    </MovieScroll>
                </div>
                <div className="pl-32 pr-16 pb-8">
                    <MovieScroll text="RECENTLY WATCHED">
                        {recentMovies.map(movie => (
                            <MovieCard
                                key={movie.id}
                                imageUrl={movie.imageUrl}
                                title={movie.title}
                                description={movie.description}
                                onDelete={deleteRecentMovie}
                                isRestoreSlide={false}
                            />
                        ))}
                    </MovieScroll>
                </div>
                <div className="pl-32 pr-16 pb-8">
                    <MovieScroll text="WATCH LIST">
                        {listMovies.map(movie => (
                            <MovieCard
                                key={movie.id}
                                imageUrl={movie.imageUrl}
                                title={movie.title}
                                description={movie.description}
                                onDelete={deleteListMovie}
                                isRestoreSlide={false}
                            />
                        ))}
                    </MovieScroll>
                </div>
                <div className="pl-32 pr-16 pb-8">
                    <MovieScroll text="REMOVED RECOMMENDATIONS">
                      {deletedMovies.length === 0 ? <div className='text-white text-2xl font-light'>Your removed recommendations go here!</div> : <div></div>}
                        {deletedMovies.map(movie => (
                            <MovieCard
                                key={movie.id}
                                imageUrl={movie.imageUrl}
                                title={movie.title}
                                description={movie.description}
                                onDelete={restoreMovie}
                                isRestoreSlide={true}
                            />
                        ))}
                    </MovieScroll>
                </div>
              </div>
              <div className='flex flex-col pl-10 pr-10'>
                <div className='flex text-white items-center justify-center space-x-4 mb-8'>
                  <CgProfile size="64px"/>
                  <div className='flex flex-col items-center justify-center space-y-1'>
                    <div className='text-2xl font-semibold'>hcistudent</div>
                    <button className='items-center justify-center bg-neutral-600 rounded text-white p-1 pl-2 pr-2' onClick={() => alert("Did not change from original site. This would lead to the edit profile screen.")}>Edit Profile</button>
                  </div>
                </div>
                <div className='flex text-white items-center justify-between text-sm space-x-4 mb-4'>
                  <div>Suggested for You</div>
                  <button className='' onClick={() => alert("Did not change from original site. Would lead to more friend suggestions.")}>More</button>
                </div>
                <div className='flex flex-col space-y-2'>
                  {suggestedFriends.map(friend => (
                    <div className='flex text-white items-center justify-between text-sm space-x-4'>
                      <div className='flex items-center space-x-3'>
                        <CgProfile size="40px"/>
                        <div>{friend}</div>
                      </div>
                      <button className='underline' onClick={() => {followFriend(friend)}}>Follow</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;
