import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={'/Profile'} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/Dialogs'} activeClassName={s.active}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="#">News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'#'}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'#'}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;