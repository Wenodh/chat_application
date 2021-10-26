import React, { useState, useEffect } from 'react';
import './feed.css';
import Share from '../share/Share';
import Post from './../post/Post';
import axios from 'axios';
// import { Posts } from '../../dummyData';
export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get('/posts/profile/' + username)
                : await axios.get('/posts/timeline/6177974ed55f1f3d01c9eb52');
            setPosts(res.data);
        };
        fetchPosts();
    }, [username]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
}
