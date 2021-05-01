import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (<div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/Dialogs'} render={() => <DialogsContainer />}/>
                {/*dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}*/}
                <Route path={'/Profile'} render={() => <Profile />}/>
                {/*profilePage={props.state.profilePage} dispatch={props.dispatch}*/}
            </div>
        </div>
    );
}


export default App;