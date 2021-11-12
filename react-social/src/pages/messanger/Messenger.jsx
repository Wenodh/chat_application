import Topbar from '../../components/topbar/Topbar';
import './messenger.css';
import Conversation from './../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import ChatOnline from './../../components/chatOnline/ChatOnline';
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const { user } = useContext(AuthContext);
    // console.log(user);
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get('/conversations/' + user._id);
                setConversations(res.data);
                console.log(conversations);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search" className="chatMenuInput" />
                        {!conversations &&
                            conversations.map((c) => {
                                return (
                                    <Conversation
                                        key={c._id}
                                        conversation={c}
                                        currentUser={user}
                                    />
                                );
                            })}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message own={true} />
                            <Message own={false} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message own={true} />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea
                                placeholder="Type a message..."
                                className="chatMessageInput"
                            />
                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    );
}
