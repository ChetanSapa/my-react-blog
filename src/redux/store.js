import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        dialogsPage: {
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
        },

        profilePage: {
            posts: [
                {id: 1, message: "Hi! How are you?", likesCount: "like 10"},
                {id: 2, message: "It's my first post", likesCount: "like 25"},
            ],
            newPostText: ""
        }
    },
    _callSubscriber () {
        console.log('State was changed');
    },

    getState () {
      return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state);
    }
}
export default store

window.store = store