import React, { useEffect, useState } from "react";
import CreateMenu from "./CreateMenu";
import {FolderIcon} from '@heroicons/react/solid'
import Directory from "./Directory";



function Home({user, directories, setDirectories, directoriesSearchValue, setReload, reload}){

    function doTheDelete(document){
        fetch(`/documents/${document.id}`,
        { method: "DELETE" })

        setReload(!reload)
    }

    



    function deleteFolder(folder){
        fetch(`/directories/${folder.id}`,
        {method: "DELETE"}).then((r) => {
            if (r.ok){
                r.json().then((data) =>  {console.log(data)
                setDirectories([...directories, data])})
            }else {
                r.json().then((errorData) => alert(errorData.erros))
            }
        })
        setReload(!reload)
    }

    function uploadNewFile(newFile){
        fetch('/documents',{
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: newFile
        })
        setReload(!reload)
        
    }



    function createNewDirectory(newDirectory){
        console.log(newDirectory)
        fetch('/directories',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDirectory)}).then((r) => {
            if (r.ok) {
                r.json().then((data) =>  {console.log(data)
                setDirectories([...directories, data])})

            } else {
                r.json().then((errorData) => alert(errorData.errors))
            }
        })
        setReload(!reload)
    }
    
        // let inFolder = directories.filter(x => x.directory_id === specificFolder.id)
        // console.log(inFolder)



    

    return (
        <>
            <div id='home'>
                <h1>Home</h1>
                <hr></hr>
                <Directory doTheDelete={doTheDelete} deleteFolder={deleteFolder} directories={directories} directoriesSearchValue={directoriesSearchValue}/>
                
                {/* <div id='inside-folder' className={folderClosed ? 'hidden' : null}>
                <h1>{specificFolder.name}</h1>
                <div id="display-folders">
                    {
                        inFolder.map(x => {
                            return (
                                <div id="display-folders" key={x.id}>
                                    <FolderIcon className="folder-icons" onClick={() => {
                                        setSpecificFolder(x)
                                        console.log(x)
                                        setFolderClosed(!folderClosed)}}/>
                                    <span>{x.name}</span>
                                </div>
                            )
                        })
                    }

                </div>
            

                </div> */}
            </div>
            <CreateMenu directories={directories} setDirectories={setDirectories} user={user} createNewDirectory={createNewDirectory} uploadNewFile={uploadNewFile}/>
            
        </>
    )};

export default Home;