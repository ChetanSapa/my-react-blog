import React from 'react';
import s from './../Dialogs.module.css';

type PropsType = {
    id: number
    val: string
}

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message}>
            <span>{props.val}</span>
        </div>
    )
}

export default Message;