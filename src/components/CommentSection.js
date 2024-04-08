import React, { useState } from 'react';

const CommentSection = ({ commentsProp }) => {
    console.log(commentsProp)
    const [comments, setComments] = useState(commentsProp);
    const [newComment, setNewComment] = useState('');

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
        setComments((prevComments) => [...prevComments, ['hcistudent', newComment]]);
        setNewComment('');
        }
    };

    return (
        <div className="w-full">
        <div>
            {comments.map((data, index) => (
                <div key={index} className="bg-gray-100 pl-2 pb-2 text-white text-sm">
                    <span className="font-bold pr-2 text-sm">
                        {data[0]}
                    </span>
                    {data[1]}
                </div>
            ))}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex items-center border rounded border-nav">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={handleInputChange}
                    className="pl-4 focus:outline-none focus:border-blue-500 text-white bg-base w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
                    &#10148;
                </button>
            </div>
        </form>
        </div>
    );
};

export default CommentSection;
