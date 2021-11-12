import './conversation.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const friendId = conversation.members.find(
            (m) => m !== currentUser._id
        );
        const getUser = async () => {
            try {
                const res = await axios('/users?userId=' + friendId);
                setUser(res.data.user);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <div className="conversation">
            <img className="conversationImg" src="" alt="" />
            <span className="conversationName">{user.username}</span>
        </div>
    );
}
