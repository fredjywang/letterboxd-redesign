import React from 'react';
import { Card } from 'react-bootstrap'; // Assuming you're using Bootstrap for Card
import { MdStar } from 'react-icons/md'; // Import the star icon from react-icons
import CommentSection from './CommentSection';

const Post = ({ post }) => {
    console.log(post.comments)
    const renderStars = (numStars) => {
        const stars = [];
        for (let i = 0; i < numStars; i++) {
          stars.push(<MdStar key={i} size="20px" className="text-yellow-400 m-1" />);
        }
        return stars;
    };

    return (
        <div className="flex justify-center">
            <Card className="w-auto text-wrap justify-left">
                {/* User */}
                <div className="flex items-center justify-left mb-4">
                    <Card.Img variant="top" src={post.userPic} alt={post.username} className="rounded-full h-12 w-12 object-cover" />
                    <div className="ml-2 text-xl text-white">{post.username}</div>
                    <div className="ml-16 text-white">{post.postTime}</div>
                </div>
                {/* Film + Post */}
                <div className="flex items-start pb-2">
                    <div className="w-1/3 h-full">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" style={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'contain' }} />
                    </div>
                    <div className="flex flex-col w-2/3 text-wrap ml-4">
                        <h2 className="text-3xl text-white font-medium-bold mb-2">{post.title}</h2>
                        <div className="flex items-center text-white mb-2">
                            {renderStars(post.numStars)}
                        </div>
                        <p className="text-white text-2xl font-light text-sm">{post.description}</p>
                    </div>
                </div>
                {/* Comment Section */}
                <div className="flex items-center justify-left mb-4 w-auto">
                    <CommentSection commentsProp={post.comments} />
                </div>
                <div className="border-b border-divide flex-grow mt-2 mb-2"></div>
            </Card>
        </div>
    );
};

export default Post;
