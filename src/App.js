import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";

let dialogsData = [
    {id: 1, name: "Matthew"},
    {id: 2, name: "John"},
    {id: 3, name: "Boby"},
];

let messageData = [
    {id: 1, val: "Hi!"},
    {id: 2, val: "How are you, man?"},
    {id: 3, val: "I'm fine! And How are you?)"},
]


let postsData = [
    {id: 1, message: "Hi! How are you?", likesCount: "like 10"},
    {id: 2, message: "It's my first post", likesCount: "like 25"},
];

const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/Dialogs'} render={ () => <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                    <Route path={'/Profile'} render={ () => <Profile postsData={postsData} />}/>
                </div>
            </div>
        </BrowserRouter>);
}


export default App;