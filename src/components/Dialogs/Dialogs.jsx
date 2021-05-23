import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogData.map(d => <DialogItem name={d.name} key={d.id} ava={d.ava} id={d.id}/>);
    let messageElements = state.messageData.map(m => <Message id={m.id} val={m.val} key={m.id}/>);
    /*let newMessageElement = props.dialogsPage.updateMessageData*/

    let newMessageElement = React.createRef();

    let onSandMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let message = e.target.value
        props.updateNewMessageBody(message)

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
                        <button onClick={onSandMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;