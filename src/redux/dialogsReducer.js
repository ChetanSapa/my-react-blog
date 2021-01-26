const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_DATE = 'UPDATE-MESSAGE-DATE';

const dialogsReduce = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_DATE:
            state.updateMessageData = action.updateMessage;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                val: state.updateMessageData
            };

            state.messageData.push(newMessage);
            state.updateMessageData = ' ';
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateMessageDateCreator = (val) => {
    return {
        type: UPDATE_MESSAGE_DATE,
        updateMessage: val
    }
}


export default dialogsReduce;