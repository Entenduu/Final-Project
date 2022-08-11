import { DotsHorizontalIcon, SearchIcon, BellIcon, CubeIcon } from '@heroicons/react/solid'
import { QuestionMarkCircleIcon, MenuIcon } from '@heroicons/react/outline'

import './assets/main.css'

function NavBar() {
    return (
        <div className='Navbar'>
            <div className='left-side'>
                <div className='menu-icon'>
                    <CubeIcon className='cube-icon'/>
                </div>
                <div className='logo'>
                    <img src='https://i.redd.it/mmqbl53sbdy71.png' alt='dropbox logo'/>
                    <a href='/home' className='divebox'><h2>Divebox</h2></a>
                    <MenuIcon className='hamburger-menu'/>
                </div>
            </div>
            <div className='right-side'>
                <div className='searchbar'>
                    <input type="text" placeholder='Search...'/>
                    <div className='search-button-div'>
                        <button type="submit" className="search-button">
                            <SearchIcon className='search-image'/>
                        </button>
                    </div>
                </div>
                <div className='icons'>
                    <QuestionMarkCircleIcon className='question-icon'/>
                    <BellIcon className='bell-icon icon' />
                    <div data-initials="CM"></div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;