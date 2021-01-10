import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/"

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={props.id} src={props.ava} alt=""/>
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;