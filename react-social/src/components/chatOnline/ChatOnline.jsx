import './chatOnline.css';

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <div className="chatOnlineName">Wenodh</div>
            </div>
        </div>
    );
}
