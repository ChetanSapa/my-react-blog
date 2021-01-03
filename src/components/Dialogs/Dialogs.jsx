import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Matthew
                </div>
                <div className={s.dialog}>
                    John
                </div>
                <div className={s.dialog}>
                    Bob
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    I'm fine!)
                </div>
            </div>
        </div>
    )
};

export default Dialogs;