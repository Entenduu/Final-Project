import React, { useEffect, useState } from "react";
import {  Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import SignUp from "./SignUp";
import Home from "./Home";
import LeftMenu from "./LeftMenu";
import './assets/main.css';

function App() {
  const [user, setUser] = useState(null);
  const [directories, setDirectories] = useState([]);
  const [directoriesSearchValue, setDirectoriesSearchValue] = useState('');
  const [reload, setReload] = useState(true);
  const [documentsFetch, setDocumentsFetch] = useState([])

  function searchDirectories(e){
    setDirectoriesSearchValue(e.target.value)
  }
    useEffect(()=>{
      fetch('/documents').then((r)=>{
        if (r.ok){
          r.json().then((document) => setDocumentsFetch(document));
        }
      });
    },[directories])


    useEffect(() => {
        fetch("/directories").then((r) => {
            if (r.ok) {
                r.json().then((directories) => setDirectories(directories));
            }
        });
    }, [reload]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      { !user ?(
      <Routes>
            <Route path="/" element={ <Login setUser={setUser} />}/>
            <Route path="/signup" element={<SignUp setUser={setUser} />}/>
      </Routes>
      ): (
      <>
        <NavBar user={user} setUser={setUser} searchDirectories={searchDirectories} directoriesSearchValue={directoriesSearchValue}/><LeftMenu/>
        <Routes>
          <Route path="/home" element={<Home  reload={reload} setReload={setReload} user={user} directories={directories} setDirectories={setDirectories} directoriesSearchValue={directoriesSearchValue}/>}/>
        </Routes>
      </>
      )}
    </div>
  );
}

export default App;
