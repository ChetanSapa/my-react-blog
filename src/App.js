import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {

    return (<div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/Dialogs'} render={ () => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path={'/Profile'} render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                </div>
            </div>
    );
}


export default App;