import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    console.log(props)

    let dialogElements = props.dialogsData.dialogData.map(d => <DialogItem name={d.name} ava={d.ava} id={d.id}/>);
    let messageElements = props.dialogsData.messageData.map(m => <Message id={m.id} val={m.val}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
};

export default Dialogs;