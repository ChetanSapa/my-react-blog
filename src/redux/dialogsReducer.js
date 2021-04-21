const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_DATE = 'UPDATE-MESSAGE-DATE';

let initialState ={
    dialogData: [
        {id: 1, name: "Matthew", ava: "https://pbs.twimg.com/media/C5TmS81W8AET_95.jpg"},
        {id: 2, name: "John", ava: "https://pbs.twimg.com/profile_images/835090891018809348/Vkhzemz2_400x400.jpg"},
        {id: 3, name: "Mario", ava: "https://i1.sndcdn.com/avatars-000357444641-8lru4y-t500x500.jpg"},
    ],
    messageData: [
        {id: 1, val: "Hi!"},
        {id: 2, val: "How are you, man?"},
        {id: 3, val: "I'm fine! And How are you?)"},
    ],
    updateMessageData : "KYky"
}

const dialogsReduce = (state = initialState, action) => {
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