// movie card in movie scroll
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';  
import { MdBackup } from "react-icons/md";

const MovieCard = ({ key, imageUrl, title, description, onDelete, isRestoreSlide }) => {
    const [isHovered, setIsHovered] = useState(null);

    const handleDelete = (title) => {
        // setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
        var confirmed;
        if (!isRestoreSlide) { 
            confirmed = window.confirm('Are you sure you want to remove this?');
        }
        else {
            confirmed = window.confirm('Are you sure you want to restore this recommendation?');
        }
        if (confirmed) {
            // Perform the delete action
            console.log(`${title} deleted!`);
            onDelete(title)
        } else {
            console.log('Delete action cancelled.');
  }
    };

    return (
        <div 
            className="flex-none rounded-md overflow-hidden p-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(null)}
        >   
            <button onClick={() => alert("This would lead to the movie's page. However, there is no difference in our redesign from the implementation so we did not add it into the prototype.")}>
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
            </button>
                <div className="flex items-center justify-center" style={{ visibility : isHovered ? 'visible' : 'hidden' }}>
                    <button
                        className="bg-red-500 text-white px-2 py-1 rounded-full self-center"
                        onClick={() => handleDelete(title)}
                    >
                        {isRestoreSlide ? <MdBackup size="30px" /> : <MdDelete size="30px" color="light red" />}
                    </button>
            </div>
        </div>
    );
};

export default MovieCard;
