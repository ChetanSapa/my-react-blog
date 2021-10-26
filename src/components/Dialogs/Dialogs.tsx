import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validation/validators";
import {InitialStateType} from "../../redux/dialogsReducer";

type OwnPropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

const Dialogs: React.FC<OwnPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogData.map(d => <DialogItem name={d.name} key={d.id} ava={d.ava} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message id={m.id} val={m.message} key={m.id}/>);

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    }

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

type NewMessageFormValuesType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

type NewMessageFormTypeFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}
const AddMessageForm:  React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormTypeFormValuesKeysType>("Enter your message", 'newMessageBody', [required, maxLength50], Textarea)}
            </div>
            <div><button>Send message</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({form: 'AddMessageForm'})(AddMessageForm)

export default Dialogs;