import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={props.id} src={props.ava} alt=""/>
            {props.val}
        </div>
    )
}

export default Message;