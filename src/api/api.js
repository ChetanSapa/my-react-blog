import axios from "axios";

// const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8dddc296-fc0d-42d5-9d28-b2eef5446365'}
})

export const usersAPI = {
    getUsers (currentPage, pageSize = 4) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
            return response.data
        })
    },
    follow (userId)  {
        return instance.post(`follow?${userId}`, {}, {
        })
    },
    unfollow (userId) {
        return instance.delete(`follow?${userId}`,  {
        })
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)

    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
        })
    }
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
