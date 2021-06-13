import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = () => {

    return (<div className='app-wrapper'>
            <HeaderComponent/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                {/*dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}*/}
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                {/*profilePage={props.state.profilePage} dispatch={props.dispatch}*/}
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path={'/login'} render={() => <LoginPage />}/>
            </div>
        </div>
    );
}


export default App;