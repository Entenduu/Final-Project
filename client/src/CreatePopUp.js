import { FolderIcon as FolderIconSolid} from '@heroicons/react/solid'

function CreatePopUp({folderWindow, setFolderWindow, handleSubmit, directories, newDirectory, handleListClick, setNewDirectory}){
    return (
        <div id='create-folder-container' className={folderWindow ? 'hidden' : null}>
                <div>
                    <div id='create-folder-top'>
                        <h3> Create Folder</h3>
                        <button onClick={() => setFolderWindow(!folderWindow)}>x</button>
                    </div>
                    <form id='create-form'>
                        <input type='text' name='folder-name' placeholder='Folder name' value={newDirectory.name}  onChange={(e) => setNewDirectory({...newDirectory, name: e.target.value})}></input>
                        <button id='create-submit' type='submit' onClick={(e) => handleSubmit(e)}>Create</button>
                    </form>
                    <ul id='folder-list-ul'>
                        <span id='folder-choice'>Create new directory inside existing directory?</span>
                        {
                            directories.map(x => {
                                
                                return (
                                    <li onClick={(e) => handleListClick(e)} value={newDirectory.directory_id} key={x.id} id={x.id}><FolderIconSolid className="folder-icons-list"/><br></br>
                                <span>{x.name}</span></li>
                                )
                                })
                        }
                    </ul>
                </div>
            </div>
    )
}
export default CreatePopUp;