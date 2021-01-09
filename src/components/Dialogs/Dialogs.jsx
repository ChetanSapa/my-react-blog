import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

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

    let dialogElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = messageData.map(m => <Message id={m.id} val={m.val}/>);

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