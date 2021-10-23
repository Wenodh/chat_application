import './login.css';

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect with friends.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeHolder="Email" className="loginInput" />
                        <input placeHolder="Password" className="loginInput" />
                        <button className="loginButton">Login In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
