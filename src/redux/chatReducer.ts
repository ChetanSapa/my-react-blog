import {chatAPI, ChatMessageType, StatusType} from "../api/chat-api";
import {FormAction} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "chat/MESSAGE_RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            }
        case 'chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status,
            }
        default:
            return state;
    }
}

export const actions = {
    messageReceived: (messages: ChatMessageType[]) => ({type: "chat/MESSAGE_RECEIVED", payload: {messages}} as const),
    statusChanged: (status: StatusType) => ({type: 'chat/STATUS_CHANGED', payload: {status}}) as const
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messageReceived(messages))
        }
    }
    return _newMessageHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('message-received',newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed',statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unSubscribe('message-received', newMessageHandlerCreator(dispatch))
    chatAPI.unSubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.start()
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer;


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>