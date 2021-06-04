const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users:[...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        default:
            return state;
    }
}
export const followAc = (userId) => ({type: FOLLOW, userId})
export const unFollowAc = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAc = (users) => ({type: SET_USERS, users})
export const setCurrentPageAc = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAc = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})

export default userReducer;