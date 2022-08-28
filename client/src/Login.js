import React, {useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';

function Login({ setUser }){
    const div = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


        function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                navigate('/home')
                window.location.reload(false)
            } else {
                r.json().then((errorData) => alert(errorData.errors))
            }
        })
    }




    function handleClick(){
        div.current.style.display = 'none'
        console.log(div.current)
    }


    return(
        <div>
            <div className="login-header">
                <div className="login-content">
                    <div className="login-header-button">
                        <button>Try DiveBox Business</button>
                    </div>
                    <div className="login-logo">
                        <img src='https://i.redd.it/mmqbl53sbdy71.png' alt='dropbox logo'/>
                        <a href='/home' className='divebox'><h2>Divebox</h2></a>
                    </div>
                    <div className="download">
                        <a href="#"><p>Download the app</p></a>
                    </div>
                </div>
            </div>
            <div className="login-body">
                <div className="alert-container">
                <div className="login-alert" ref={div}>
                    <p className="alert-p">Dropbox Passwords remembers your login credentials, so you don't have to.<a href='/' id="notif-link">Try DiveBox Passwords</a></p>
                    <span className="login-closebtn" onClick={() => {handleClick()}}>&times;</span>
                </div>
                </div>
                <div className="login-form">
                    <div className="login-form-left">
                        <img src="https://i.imgur.com/5rug32F.png" alt='sign in'/> {/* https://i.imgur.com/TL7Vvay.png */}
                    </div>
                    <div className="login-form-right">
                        <div className="top-of-form">
                            <p id='sign-in-p'>Sign in</p>
                            <p>or &nbsp;<a href='/signup'>create an account</a></p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <button>google</button>
                            </div>
                            <div className="input-container" id="apple-button">
                                <button>apple</button>
                            </div>
                            <span id='or'> or </span>
                            <div className="label-container">
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className="input-container">
                                <input type='text' name='email' value= {email} onChange={(e) => setEmail(e.target.value)}required />
                            </div>
                            <div className="label-container">
                                <label htmlFor="Password">Password</label>
                            </div>
                            <div className="input-container">
                                <input type='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} required ></input><br/>
                            </div>
                            <div id='bottom-form'>
                                <div id='bottom-form-left'>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberPassword"
                                        name="checkbox"
                                        // checked={rememberPassword}
                                        // onChange={(event) => handleChechbox(event)}
                                        // required
                                    />
                                    <label className="form-check-label" for="rememberPassword">Remember me</label>
                                </div>
                                <div id='bottom-form-right'>
                                    <button type="submit"> Sign in </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                <footer className="footer">
                    <div className="column">
                        <p>Divebox</p>
                        <p>Install</p>
                        <p>Mobile</p>
                        <p>Pricing</p>
                        <p>Business</p>
                        <p>Enterprise</p>
                        <p>Features</p>
                    </div>
                    <div className="column">
                        <p>About us</p>
                        <p>Divebox Blog</p>
                        <p>About</p>
                        <p>Branding</p>
                        <p>News</p>
                        <p>Jobs</p>
                    </div>
                    <div className="column">
                        <p>Support</p>
                        <p>Help Center</p>
                        <p>Contact us</p>
                        <p>Copyright</p>
                        <p>Cookie policy</p>
                        <p>Cookies & CCPA preferences</p>
                        <p>Privacy & Terms</p>
                        <p>Sitemap</p>
                    </div>
                    <div className="column">
                        <p>Community</p>
                        <p>Referrals</p>
                        <p>Forum</p>
                        <p>Twitter</p>
                        <p>Facebook</p>
                        <p>Developers</p>
                    </div> 
                </footer>
        </div>
    )
}
export default Login;