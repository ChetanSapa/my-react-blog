import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    ava: string
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img  src={props.ava} alt=""/>
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;