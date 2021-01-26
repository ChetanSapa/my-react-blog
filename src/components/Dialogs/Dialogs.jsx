import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {addMessageCreator, updateMessageDateCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogData.map(d => <DialogItem name={d.name} ava={d.ava} id={d.id}/>);
    let messageElements = props.dialogsPage.messageData.map(m => <Message id={m.id} val={m.val}/>);
    /*let newMessageElement = props.dialogsPage.updateMessageData*/

    let newMessageElement = React.createRef();
    let sandMessage = () => {
        props.dispatch(addMessageCreator());
    }

    let onMessageChange = (e) => {
        let message = newMessageElement.current.value;
        props.dispatch(updateMessageDateCreator(message));
}

return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                <div>{ messageElements }</div>
                <div className={s.addmsg}>
                    <div>
                        <textarea ref={newMessageElement} onChange={onMessageChange} name="" id="" cols="30" rows="3"/>
                    </div>
                    <div>
                        <button onClick={sandMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;