// components/Lists.js
import React, { useState } from 'react';
import MovieList from '../components/MovieList';

import dunePoster from '../assets/dune-2-poster.jpg';
import gbPoster from '../assets/gb-poster.jfif';
import immmaculatePoster from '../assets/immaculate-poster.jpg';
import kfp4Poster from '../assets/kfp4-poster.jpg';
import mmPoster from '../assets/mm-poster.jfif';
import abigailPoster from '../assets/abigail-poster.jpg';
import gxkPoster from '../assets/gxk-poster.jpg';
import tfoPoster from '../assets/tfo-poster.jfif';
import blackBg from '../assets/black-bg.jpg';

const Lists = () => {
    // Example movie data
    const list1 = [
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
    ];

    const list1Details = {
        title: 'my list',
        description: 'this is my first list',
        numFilms: 5,
        numComments: 6,
    }

    const list2 = [
        {
            imageUrl: abigailPoster,
            title: 'Abigail',
        },
        {
            imageUrl: gxkPoster,
            title: 'Godzilla x Kong',
        },
        {
            imageUrl: blackBg,
            title: 'blank',
        },
        {
            imageUrl: blackBg,
            title: 'blank',
        },
        {
            imageUrl: blackBg,
            title: 'blank',
        },
    ]

    const list2Details = {
        title: 'Fav New Movies',
        description: 'A list of my fav movies',
        numFilms: 2,
        numComments: 2,
    }

    const list3 = [
        {
            imageUrl: tfoPoster,
            title: 'The First Omen',
        },
        {
            imageUrl: blackBg,
            title: 'blank',
        },
        {
            imageUrl: blackBg,
            title: 'blank',
        },
        {
            imageUrl: blackBg,
            title: 'blank',
        },
        {
            imageUrl: blackBg,
            title: 'blank',
        },
    ]

    const list3Details = {
        title: 'Watchlist',
        description: 'need to watch',
        numFilms: 1,
        numComments: 1,
      }

  const [activeTab, setActiveTab] = useState('yourLists');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-base">
      <div className="container mx-auto">
        <div className="p-12"></div>
        <div className="pl-32 pr-32">
        <div className="p-4">
            <div className="flex space-x-4">
                <button
                    onClick={() => handleTabChange('yourLists')}
                    className={`rounded focus:outline-none text-2xl ${
                        activeTab === 'yourLists' ? 'bg-blue-500 text-white' : 'text-list-unselected'
                    }`}
                >
                    YOUR LISTS
                    <div className={`border-b border-divide flex-grow ${activeTab === 'yourLists' ? 'border-white' : 'hidden'}`}></div>
                </button>
                <space/>
                <button
                    onClick={() => handleTabChange('sharedWithYou')}
                    className={`rounded focus:outline-none text-2xl ${
                        activeTab === 'sharedWithYou' ? 'bg-blue-500 text-white' : 'text-list-unselected'
                    }`}
                >
                   SHARED WITH YOU
                   <div className={`border-b border-divide flex-grow ${activeTab === 'sharedWithYou' ? 'border-white' : 'hidden'}`}></div>
                </button>
            </div>
            <div className="border-b border-divide mb-4"></div>

            {activeTab === 'yourLists' && (
                <div className="p-4 space-y-8">
                    <MovieList movies={list1} listDetails={list1Details}/>
                    <MovieList movies={list2} listDetails={list2Details}/>
                    <MovieList movies={list3} listDetails={list3Details}/>
                </div>
            )}

            {activeTab === 'sharedWithYou' && (
                <div className="p-4">
                    <h2 className="text-lg text-white font-base">Lists shared with you go here!</h2>
                </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
