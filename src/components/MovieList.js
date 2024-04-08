import React from 'react';
import { LiaCommentSolid } from "react-icons/lia";
import { MdOutlineModeEdit } from "react-icons/md";
import { Link } from 'react-router-dom';

const MovieList = ({ movies, listDetails }) => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="flex w-1/2">
                    {movies.map((movie, index) => {
                        const offset = 2.5 + 4.4 * (index-1);
                        const offsetRounded = offset.toFixed(1).toString();
                        console.log(index, offsetRounded)
                        console.log(`-translate-x-[${offsetRounded}rem]`)
                        return (
                            <div key={index} className="relative w-36 h-36">
                                <img
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    className={`absolute w-full h-full object-cover border border-list-border rounded ${index === 1 ? `-translate-x-[2rem]` : (index === 2 ? `-translate-x-[4rem]` : (index === 3 ? `-translate-x-[6rem]` : (index === 4 ? `-translate-x-[8rem]` : '')))}`}
                                
                                    style={{ zIndex: movies.length - index }}
                                />
                                </div>
                        )
                        // <div key={index} className="relative w-32 h-36 mb-8 mr-4">
                        //     <img src={movie.imageUrl} alt={movie.title} className="absolute w-full h-full object-cover" style={{ zIndex: movies.length - index }} />
                        // </div>
                        }
                    )}
                </div>
                <div className="w-3/5 -translate-x-24">
                    <div className="flex flex-col space-y-1">
                        <div className="text-white text-3xl">
                            {listDetails.title}
                        </div>
                        <div className="flex flex-row items-center text-sm space-x-2 text-white">
                            <div>
                                {listDetails.numFilms} films
                            </div>
                            <div className="flex flex-row items-center text-sm space-x-2 text-white">
                                <LiaCommentSolid className="mr-1"/> {listDetails.numComments}
                            </div>
                            {listDetails.title === 'my list' ?
                                <Link to="/lists/edit/1/">
                                    <MdOutlineModeEdit />
                                </Link> :
                                <button onClick={() => alert("Did not implement other lists for simplicity of implementation. Please look to the first list for examples!")}>
                                    <MdOutlineModeEdit />
                                </button>
                            }

                        </div>
                        <div className="text-white text-lg font-light">
                            {listDetails.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-divide flex-grow mt-8 mb-2"></div>
        </div>
    )
}

export default MovieList;