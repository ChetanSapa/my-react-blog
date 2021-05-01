import React from 'react';
import {addMessageCreator, updateMessageDateCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    /* let state = props.store.getState().dialogsPage

     let newMessageElement = React.createRef();
     let onSandMessageClick = () => {
         props.store.dispatch(addMessageCreator());
     }

     let onMessageChange = (message) => {
         props.store.dispatch(updateMessageDateCreator(message));
     }*/

    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage

            let newMessageElement = React.createRef();
            let onSandMessageClick = () => {
                store.dispatch(addMessageCreator());
            }

            let onMessageChange = (message) => {
                store.dispatch(updateMessageDateCreator(message));
            }
            return <Dialogs updateNewMessageBody={onMessageChange}
                            sendMessage={onSandMessageClick}
                            dialogsPage={state}
            />
        }}
    </StoreContext.Consumer>
};

export default DialogsContainer;