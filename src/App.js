import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Users from "./components/Users/Users";

const App = () => {

    return (<div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                {/*dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}*/}
                <Route path={'/profile'} render={() => <Profile />}/>
                {/*profilePage={props.state.profilePage} dispatch={props.dispatch}*/}
                <Route path={'/users'} render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}


export default App;