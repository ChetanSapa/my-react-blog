import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReduce from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReduce
})

let store = createStore(reducers)

export default store