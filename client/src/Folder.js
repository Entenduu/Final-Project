import React, {useEffect, useState} from "react";
import {FolderIcon} from '@heroicons/react/solid'

function Folder({x, setSelectedFolder, selectedFolder, setActualFolder, deleteFolder}){
    // const documents = x.documents;
    // const actualDocuments = documents.length > 0;

    // const filtered = documents.filter(document => document.directory_id === selectedFolder.id)

    function handleDelete(folder){
        deleteFolder(folder)
    }
    
    return (
        <>
            <div id="display-folders" key={x.id} >
                <button className='folder-x' onClick={() => handleDelete(x)}>x</button>
                <FolderIcon className="folder-icons" onClick={() => {
                    setSelectedFolder(x.id)
                    setActualFolder(x)
                    // console.log(x)
                    // console.log(x.documents)
                }}/>
                <span>{x.name}</span>
            </div>
            
        </>
    )
}
export default Folder;