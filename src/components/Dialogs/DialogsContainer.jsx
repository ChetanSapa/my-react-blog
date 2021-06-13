import React from 'react';
import {addMessageCreator, updateMessageDateCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

/*
const DialogsContainer = (props) => {

     let state = props.store.getState().dialogsPage

     let newMessageElement = React.createRef();
     let onSandMessageClick = () => {
         props.store.dispatch(addMessageCreator());
     }

     let onMessageChange = (message) => {
         props.store.dispatch(updateMessageDateCreator(message));
     }

    return <StoreContext.Consumer>
        {
        (store) => {

            let newMessageElement = React.createRef();
            let onSandMessageClick = () => {
                store.dispatch(addMessageCreator());
            }

            let onMessageChange = (message) => {
                store.dispatch(updateMessageDateCreator(message));
            }
            return <Dialogs updateNewMessageBody={onMessageChange}
                            sendMessage={onSandMessageClick}
                            dialogsPage={store.getState().dialogsPage}
            />
        }}
    </StoreContext.Consumer>
};*/
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)



let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (message) => {
            dispatch(updateMessageDateCreator(message))
        },
        sendMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;