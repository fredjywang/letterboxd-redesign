import React from 'react';
import { Container } from 'react-bootstrap'; // Assuming you're using Bootstrap for Container
import Post from './Post'; // Import the Post component

import dunePoster from '../assets/dune-2-poster.jpg';
import wowsPoster from '../assets/wows-poster.jpg';
import dp1 from '../assets/dp.jpg';
import dp2 from '../assets/dp2.jpg';

const Feed = () => {
    const posts = [
        {
            id: 1,
            image: dunePoster,
            title: 'Dune: Part Two',
            numStars: 4,
            description: 'Need a friend like Stilgar to hype me up all the time!! Need a friend like Stilgar to hype me up all the time!! Need a friend like Stilgar to hype me up all the time!! Need a friend like Stilgar to hype me up all the time!! Need a friend like Stilgar to hype me up all the time!! This movie was incredible and is a must-watch!!! :D',
            userPic: dp1,
            username: 'Jay',
            postTime: '10m',
            comments: [['Bryan','this movie is so good!'], ['Terrance','it was alright i guess']],
        },
        {
            id: 2,
            image: wowsPoster,
            title: 'The Wolf of Wall Street',
            numStars: 4,
            description: 'Listen. There’s AI all over this in the cutaways and “we’ll be right back” network messages. For this reason I can\'t enjoy the amazing performances and clever ending... Leo\'s acting was incredible though. Wow. I am simply astounded!',
            userPic: dp2,
            username: 'Bryan',
            postTime: '1d',
            comments: [['Terrance', 'i didnt like this movie as much!']],
        },
    ]

    return (
        <div className="my-8">
            {/* <h1 className="text-3xl font-bold mb-4">Social Media Feed</h1> */}
            <Container fluid>
                <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
                </div>
            </Container>
        </div>
    );
};

export default Feed;