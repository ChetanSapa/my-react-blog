import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validation/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogData.map(d => <DialogItem name={d.name} key={d.id} ava={d.ava} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message id={m.id} val={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div className={s.addmsg}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
};

//create Form with redux-form

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newMessageBody'
                    placeholder='Enter your message'
                    validate={[required, maxLength50]}/>
            </div>
            <div><button>Send message</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm)

export default Dialogs;