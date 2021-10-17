import axios from "axios";
import {UsersType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8dddc296-fc0d-42d5-9d28-b2eef5446365'
    }
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaISRequired = 10
}

export type GetItemsType= {
    items: UsersType
    totalCount: number
    error: string | null
}

// export const getUsers = (currentPage, pageSize = 4) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => {
//         return response.data
//     })
// }

// export const followUser = (id) => {
//     return instance.post(`follow?${id}`, {}, {
//         withCredentials: true,
//         headers: {
//             'API-KEY': '8dddc296-fc0d-42d5-9d28-b2eef5446365'}
//     })
// }

// export const unfollowUser = (id) => {
//     return instance.delete(`follow?${id}`,  {
//         withCredentials: true,
//         headers: {
//             'API-KEY': '8dddc296-fc0d-42d5-9d28-b2eef5446365'}
//     })
// }
export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}