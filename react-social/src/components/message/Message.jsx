import './message.css';

export default function Message({ own }) {
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt="avatar"
                />
                <p className="messageText">Hello this is message</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    );
}
