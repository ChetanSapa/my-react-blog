import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    posts: [
        {id: 1, message: "Hi! How are you?", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 25},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "profile/ADD-POST": {
            let newPost = {
                id: 5,
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case 'profile/DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case 'profile/SET_STATUS' :
            return {
                ...state,
                status: action.status
            }
        case 'profile/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'profile/SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state;
    }
}


export const actions = {
    addPostActionCreator: (newPostBody: string) => ({type: "profile/ADD-POST", newPostBody} as const),
    deletePostActionCreator: (id: number) => ({type: 'profile/DELETE_POST', id} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'profile/SET_STATUS', status: status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const)
}

export const getUserProfile = (userId: number):ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId: number):ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string):ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0)
            dispatch(actions.setStatus(status))
    } catch (error) {
        console.log('Some error happen. Look in to Netvork page')
    }
}
export const savePhoto = (file: File):ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if(data.resultCode === 0)
        dispatch(actions.savePhotoSuccess(data.data.photos))
}
export const saveProfile = (profile: ProfileType):ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile)
    if(data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
           throw new Error('userId cant be null')
        }
    } else {
        dispatch(stopSubmit('editProfile', {_error: data.messages[0]}))
        // dispatch(stopSubmit('editProfile', {'contacts': {'facebook': response.data.messages[0]}}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>