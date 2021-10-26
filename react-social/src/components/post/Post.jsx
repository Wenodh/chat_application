import { MoreVert } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './post.css';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
// import { Users } from '../../dummyData';

export default function Post({ post }) {
    const [like, setLike] = useState(post.like.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const res = axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img
                                className="postProfileImg"
                                src={
                                    user.profilePicture ||
                                    PF + 'person/noAvatar.png'
                                }
                                alt=""
                            />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">
                            {format(post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            className="likeIcon"
                            src={`${PF}like.png`}
                            alt=""
                            onClick={likeHandler}
                        />
                        <img
                            className="likeIcon"
                            src={`${PF}heart.png`}
                            alt=""
                        />
                        <span className="postLikeCounter">
                            {like} people like it
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
