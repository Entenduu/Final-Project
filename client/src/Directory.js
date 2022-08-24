import { ZoomInIcon, DocumentIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Folder from "./Folder";

function Directory({directories, directoriesSearchValue, doTheDelete, deleteFolder}){
    const [selectedFolder, setSelectedFolder] = useState(0)
    const [actualFolder, setActualFolder] = useState({})
    

    const rootDirectories = directories.filter(x => x.directory_id === selectedFolder)
    const searchlist = rootDirectories.filter(x => x.name.toLowerCase().startsWith(directoriesSearchValue.toLowerCase()))

    function deleteFile(document){

        doTheDelete(document)
    }


    return (
        <div id='folders-container'>
            <button id='back-button' onClick={()=> { setSelectedFolder(0)}}>root</button>


                {

                    
                    searchlist.map(x => { 
                        console.log(x)
                        return (
                            <>
                                <Folder deleteFolder={deleteFolder} x={x} setSelectedFolder={setSelectedFolder} setActualFolder={setActualFolder} selectedFolder={selectedFolder}/>
                            </>
                        )
                    })
                }

                {
                    actualFolder?.documents?.length > 0 ? actualFolder?.documents?.map(document => {
                        return (
                            document.directory_id === actualFolder.id ?
                                (   
                                    
                                        <div id="display-files" className="files" >
                                            <button className='folder-x' onClick={()=> deleteFile(document)}>x</button>
                                            <img id='file' src={document.attachment_url} alt="img"/>
                                            <span>{document.name}</span>
                                        </div>
                                    
                                ) : console.log('wtf')
                        )
                    }) : null
                }
        </div>
    )

}
export default Directory;