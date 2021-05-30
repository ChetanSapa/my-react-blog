const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl: '', followed: true, name: 'Igor', status: 'I am boss', country: 'Moscow'},
        // {id: 2, photoUrl: '', followed: false, name: 'John', status: 'I am boss', country: 'London'},
        // {id: 3, photoUrl: '', followed: true, name: 'Bob', status: 'I am boss', country: 'New York'},
    ],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u
                })
            }
        case SET_USERS: {
                return  {...state, users: [...state.users, ...action.users]}
            }
        default:
            return state;
    }
}
export const followAc = (userId) => ({type: FOLLOW, userId})
export const unFollowAc = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAc = (users) => ({type: SET_USERS , users})

export default userReducer;