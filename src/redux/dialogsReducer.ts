const ADD_MESSAGE = "dialogs/ADD-MESSAGE";

type DialogDataType = {
    id: number
    name: string
    ava: string
}

type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogData: [
        {id: 1, name: "Matthew", ava: "https://pbs.twimg.com/media/C5TmS81W8AET_95.jpg"},
        {id: 2, name: "John", ava: "https://pbs.twimg.com/profile_images/835090891018809348/Vkhzemz2_400x400.jpg"},
        {id: 3, name: "Mario", ava: "https://i1.sndcdn.com/avatars-000357444641-8lru4y-t500x500.jpg"},
    ] as Array<DialogDataType>,
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you, man?"},
        {id: 3, message: "I'm fine! And How are you?)"},
    ] as Array<MessagesType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state;
    }
}

type AddMessageCreatorActionType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}

export const addMessageCreator = (newMessageBody: string): AddMessageCreatorActionType => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;