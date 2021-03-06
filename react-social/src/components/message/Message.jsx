import './message.css';
import { format } from 'timeago.js';
export default function Message({ message, own }) {
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt="avatar"
                />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    );
}
