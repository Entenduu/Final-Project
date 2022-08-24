import React, {useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';


function SignUp({setUser}){
    const div = useRef(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            password
        }),
    }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate('/home')
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
                    <div className="download" style={{visibility:'hidden'}}>
                        <a href="/"><p>Download the app</p></a>
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
                        <img src="https://cdn2.iconfinder.com/data/icons/flat-illustrations-1/550/Cloud_Server-1024.png" alt='sign in'/>
                    </div>
                    <div className="login-form-right">
                        <div className="top-of-form">
                            <p id='sign-in-p'>Create an account</p>
                            <p>or &nbsp;<a href='/'>log in</a></p>
                        </div>
                            <form>
                            <div className="label-container">
                                <label htmlFor="firstname">First Name</label>
                            </div>
                            <div className="input-container">
                                <input type='text' name='firstname' value= {firstName} onChange={(e) => setFirstName(e.target.value)}required />
                            </div>
                            <div className="label-container">
                                <label htmlFor="lastname">Last Name</label>
                            </div>
                            <div className="input-container">
                                <input type='text' name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required ></input><br/>
                            </div>
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
                            <div id='bottom-form-create'>
                                <div id='bottom-form-left-create'>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="policy"
                                        name="checkbox"
                                        // checked={rememberPassword}
                                        // onChange={(event) => handleChechbox(event)}
                                        // required
                                    />
                                    <label className="form-check-label-create" htmlFor="policy">I agree to the Dropbox Terms. Learn about how we use and protect your data in our Privacy Policy.</label>
                                </div>
                                <div id='bottom-form-right-create'>
                                    <button type="submit" onClick={handleSubmit}> Create an account </button>
                                </div>
                                <div id='bottom-form-right-create'>
                                    <button> Sign up with Google </button>
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
export default SignUp;