
import { useNavigate } from 'react-router-dom';

import { DotsHorizontalIcon, SearchIcon, BellIcon, CubeIcon } from '@heroicons/react/solid'
import { QuestionMarkCircleIcon, MenuIcon, HomeIcon, FolderOpenIcon, ClockIcon, SparklesIcon, PhotographIcon, ShareIcon, DocumentAddIcon, DocumentRemoveIcon } from '@heroicons/react/outline'

import './assets/main.css'
import React,{useState} from 'react'

function NavBar({user, setUser, directoriesSearchValue, searchDirectories}) {

    const navigate = useNavigate();

    const [signOutMenu, setSignOutMenu] = useState(true);
    const [notification, setNotification] = useState(true);
    const [helpCenter, setHelpCenter] = useState(true);
    const [cubeMenu, setCubeMenu] = useState(true);
    const [hamburger, setHamburger] = useState(true);


    let usericon = user.first_name[0].toUpperCase() + user.last_name[0].toUpperCase()


    function handleLogOut() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
        }
        navigate('/')
        });
    }


    function handleHamburger(){
        console.log('hello')
        setHamburger(!hamburger)
        setNotification(true)
        setHelpCenter(true)
        cubeMenu(true)
        setSignOutMenu(true)
    }

    function handleSignOut(){
        setSignOutMenu(!signOutMenu)
        setNotification(true)
        setHelpCenter(true)
        cubeMenu(true)
    }

    function handleNotification(){
        setNotification(!notification)
        setSignOutMenu(true)
        setHelpCenter(true)
        cubeMenu(true)
    }

    function handleHelpCenter(){
        setHelpCenter(!helpCenter)
        setSignOutMenu(true)
        setNotification(true)
        cubeMenu(true)
    }

    function handleCube(){
        setCubeMenu(!cubeMenu)
        setSignOutMenu(true)
        setNotification(true)
        setHelpCenter(true)
    }

    return (
        <div className='Navbar'>
            <div className='left-side'>
                <div className='menu-icon'>
                    <CubeIcon className='cube-icon' onClick={()=>handleCube()}/>
                </div>
                <div id='cube-menu' className={cubeMenu ? 'hidden' : ''}>
                    <ul>
                        <li>
                            Divebox
                            <p>Store, share, and access files across devices</p>
                        </li>
                        <li>HelloSign
                            <p>Get secure Esignatures for any document</p>
                        </li>
                        <li>DocSend
                            <p>Send documents securely and track activity</p>
                        </li>
                        <li>Backup
                            <p>Automatically back up all your devices</p>
                        </li>
                        <hr></hr>
                        <h2>Explore more</h2>
                        <li>Transfer
                            <p>Deliver large file securely to anyone</p>
                        </li>
                        <li>Paper
                            <p>Draft ideas in collaborative docs</p>
                        </li>
                        <li>Passwords
                            <p>Sync and store your passwords across devices</p>
                        </li>
                        <hr></hr>
                        <li>Capture
                            <p>Create screen recordings and video messages</p>
                        </li>
                        <li>Replay
                            <p>Review videos faster with your team</p>
                        </li>
                        <li>Shop
                            <p>Sell your digital content directly from Divebox</p>
                        </li>
                        <hr></hr>
                        <li>App Center
                            <p>Discover and connect apps on Divebox </p>
                        </li>
                    </ul>
                </div>
                <div className='logo'>
                    <img src='https://i.redd.it/mmqbl53sbdy71.png' alt='dropbox logo'/>
                    <a href='/home' className='divebox'><h2>Divebox</h2></a>
                    <MenuIcon className='hamburger-menu' onClick={()=>handleHamburger()}/>
                    <div>
                        <div id='hamburger-menu' className={hamburger ? 'hidden' : ''}>
                            <ul>
                                <li>
                                    <HomeIcon className='left-menu-icons'/>
                                    <a href='/home' id='home-link'>
                                        &nbsp; Home
                                    </a>
                                </li>
                                <li>
                                    <FolderOpenIcon className='left-menu-icons'/>
                                    <span>
                                        &nbsp; All Files
                                    </span>
                                </li>
                                <li>
                                    <ClockIcon className='left-menu-icons'/>
                                    <span>
                                        &nbsp; Recent
                                    </span>
                                </li>
                                <li>
                                    <SparklesIcon className='left-menu-icons'/>
                                    <span>
                                        &nbsp; Starred
                                    </span>
                                </li>
                                <li>
                                    <PhotographIcon className='left-menu-icons'/>
                                    <span>
                                        &nbsp; Photos
                                    </span>
                                </li>
                                <li>
                                    <ShareIcon className='left-menu-icons'/>
                                    <span>
                                        &nbsp; Shared
                                    </span>
                                </li>
                                <li>
                                    <DocumentAddIcon className='left-menu-icons'/>
                                    <span>
                                        &nbsp; File Request
                                    </span>
                                </li>
                                <li>
                                    <DocumentRemoveIcon className='left-menu-icons'/>
                                    <span>
                                        &nbsp; Deleted Files
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <div className='searchbar'>
                    <input type="text" placeholder='Search...' onChange={(e) => searchDirectories(e)} value={directoriesSearchValue}/>
                    <div className='search-button-div'>
                        <button type="submit" className="search-button">
                            <SearchIcon className='search-image'/>
                        </button>
                    </div>
                </div>
                <div className='icons'>
                    <QuestionMarkCircleIcon className='question-icon' onClick={()=> handleHelpCenter()}/>
                    <div id='help-center-menu' className={helpCenter ? 'hidden' : ''}>
                        <ul>
                            <li>Help Center</li>
                            <li>Community</li>
                            <hr></hr>
                            <li>What's new</li>
                            <hr></hr>
                            <li>Privacy & Legal</li>
                            <li>Cookie & CCPA preferences</li>
                            <hr></hr>
                            <li>Report an issue</li>
                        </ul>
                    </div>
                    <BellIcon className='bell-icon icon' onClick={()=> handleNotification()}/>
                    <div id='notification-menu' className={notification ? 'hidden' : ''}>
                        <div id='notification'><h5>Notifications</h5></div>
                        <hr></hr>
                        <p style={{fontSize: "15px", marginLeft: '25px'}}>Recent</p>
                        <div id='notif-text'>
                            <div id='notif-logo-container'>
                                <img id='notif-logo'src='https://cfl.dropboxstatic.com/static/metaserver/static/images/icons64/system_notification_default_icon-vfl0Gu6Pt.png' alt='dropbox logo'></img>
                            </div>
                            <p id='first-notif'>Welcome to Divebox! It's times to get started uploading and sharing.</p>
                        </div>
                        <div id='notif-button'><button>Get started</button></div>
                    </div>
                    <div id="element" data-initials={usericon} onClick={()=>handleSignOut()}></div>
                        <div className={ `absolute + ${signOutMenu ? 'hidden': ''}`}>
                            <ul id='menu'>
                                <div id='username' data-initials={usericon}> {user.first_name + ' ' +  user.last_name}</div><br/>
                                <span id='email'>{user.email}</span><br/>
                                <span id='storage-space'>Your account has 2 GB of storage</span><br/>
                                <a href='#'id='update'>Upgrade</a>
                                <hr id='hr'></hr>
                                <li>Settings</li>
                                <li>Automations</li>
                                <li>Install browser extension</li>
                                <li>Install Divebox app</li>
                                <li><span onClick={()=>handleLogOut()}>Sign out</span></li>
                            </ul>
                        </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default NavBar;