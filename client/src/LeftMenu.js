import React,{useState} from 'react';

import './assets/main.css'
import {HomeIcon, FolderOpenIcon, ClockIcon, SparklesIcon, PhotographIcon, ShareIcon, DocumentAddIcon, DocumentRemoveIcon, ChevronRightIcon} from '@heroicons/react/outline'

function LeftMenu(){

    
    return (
        <div id='left-side-menu-open'>
            <div id='left-list'>
                <ul>
                    <li>
                        <HomeIcon className='left-menu-icons'/>
                        <a href='/home'  id='home-link' className='hidden-menu'>
                            &nbsp; Home
                        </a>
                    </li>
                    <li>
                        <FolderOpenIcon className='left-menu-icons'/>
                        <span className='hidden-menu'>
                            &nbsp; All Files
                        </span>
                    </li>
                    <li>
                        <ClockIcon className='left-menu-icons'/>
                        <span className='hidden-menu'>
                            &nbsp; Recent
                        </span>
                    </li>
                    <li>
                        <SparklesIcon className='left-menu-icons'/>
                        <span className='hidden-menu'>
                            &nbsp; Starred
                        </span>
                    </li>
                    <li>
                        <PhotographIcon className='left-menu-icons'/>
                        <span className='hidden-menu'>
                            &nbsp; Photos
                        </span>
                    </li>
                    <li>
                        <ShareIcon className='left-menu-icons'/>
                        <span className='hidden-menu'>
                            &nbsp; Shared
                        </span>
                    </li>
                    <li>
                        <DocumentAddIcon className='left-menu-icons'/>
                        <span className='hidden-menu'>
                            &nbsp; File Request
                        </span>
                    </li>
                    <li>
                        <DocumentRemoveIcon className='left-menu-icons'/>
                        <span className='hidden-menu'>
                            &nbsp; Deleted Files
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default LeftMenu;