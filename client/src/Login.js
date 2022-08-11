import React, {useRef} from "react";

function Login(){
    const div = useRef(null);
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
                        <img src="https://i.imgur.com/TL7Vvay.png" alt='sign in'/>
                    </div>
                    <div className="login-form-right">
                        <div className="top-of-form">
                            <p id='sign-in-p'>Sign in</p>
                            <p>or &nbsp;<a>create an account</a></p>
                        </div>
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;