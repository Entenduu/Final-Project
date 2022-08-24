import React, {useState} from 'react'


import { DocumentAddIcon, FolderAddIcon, FolderIcon, FolderOpenIcon, CogIcon } from '@heroicons/react/outline'
import { FolderIcon as FolderIconSolid} from '@heroicons/react/solid'

import CreatePopUp from './CreatePopUp'

function CreateMenu({directories, setDirectories, user, createNewDirectory, folderClosed, setFolderClosed, specificFolder, uploadNewFile}){
    const [folderWindow, setFolderWindow] = useState(true)
    const [fileWindow, setFileWindow] = useState(true)
    const [fileValue, SetFileValue] = useState(null)
    const [folderID, setFolderID] = useState(null)
    const [fileName, setFileName] = useState('')
    
    // let [name, setName] = useState('')
    // let [userid, setUserid] = useState(user.id)
    // let [directoryid, setDirectoryId] = useState(0)

    


    let [newDirectory, setNewDirectory] = useState({
        name: '',
        user_id: user.id,
        directory_id: 0
    })


    function handleListClick(e){
        setNewDirectory({...newDirectory, directory_id: e.target.id})
    }
    function handleFileFolderListClick(e){
        setFolderID(e.target.id)

    }

    function handleFileSubmit(e){
        e.preventDefault()
        const newFile = new FormData();
        newFile.append("name",fileName);
        newFile.append('directory_id', folderID);
        newFile.append('attachment', fileValue);
        // console.log(fileName)
        //  console.log(folderID)
        //   console.log(fileValue)
        // console.log(newFile)
        uploadNewFile(newFile)
    }

    function handleSubmit(e){
        e.preventDefault()

        createNewDirectory(newDirectory)

    }



    return (
        <div>
            <div id='create-menu'>
                <button id="create-button">Create new file</button>
                <div> &nbsp; 
                        <ul>
                            <li onClick={() => setFileWindow(!fileWindow)}><label htmlFor='upload' ><DocumentAddIcon className='create-menu-icons'/> &nbsp;Upload files</label></li>
                            <input id='upload' type='file' name='upload' onChange={(e)=> SetFileValue(e.target.files[0])} style={{display:'none'}}></input>
                            <li><FolderAddIcon className='create-menu-icons'/> &nbsp; Upload folder</li>
                            <li onClick={() => setFolderWindow(!folderWindow)}><FolderIcon className='create-menu-icons'/> &nbsp; New folder</li>
                            <li><FolderOpenIcon className='create-menu-icons'/> &nbsp; New shared folder</li>
                            <li><CogIcon className='create-menu-icons'/> &nbsp; New automated folder</li>
                        </ul>
                </div>
            </div>
            <CreatePopUp folderWindow={folderWindow} setFolderWindow={setFolderWindow} handleSubmit={handleSubmit} directories={directories} setNewDirectory={setNewDirectory} newDirectory={newDirectory} handleListClick={handleListClick}/>
            <div id='create-folder-container' className={fileWindow? 'hidden' : null}>
                <div>
                    <div id='create-folder-top'>
                        <h3> Upload File</h3>
                        <button onClick={() => setFileWindow(!fileWindow)}>x</button>
                    </div>
                    <form id='create-form'>
                        <label htmlFor='fileName' style={{display:'none'}}></label>
                        <input type='text' name='fileName' placeholder='File name' onChange={(e) => setFileName(e.target.value)}></input>
                        <button id='create-submit' type='submit' onClick={(e) => handleFileSubmit(e)}>Create</button>
                    </form>
                    <ul id='folder-list-ul'>
                        <span id='folder-choice'>Select a folder to add file</span>
                        {
                            directories.map(x => {
                                
                                return (
                                    <li onClick={(e) => handleFileFolderListClick(e)} key={x.id} id={x.id}><FolderIconSolid className="folder-icons-list"/><br></br>
                                <span>{x.name}</span></li>
                                )
                                })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default CreateMenu;


