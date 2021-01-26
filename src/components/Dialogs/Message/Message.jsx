import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={s.message}>
            <div>{props.id} </div> <span>{props.val}</span>
        </div>
    )
}

export default Message;