import axios from "axios";

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
        console.warn('Obsolete method. Please use profileAPI obj')
        return profileAPI.getProfile(userId)

    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
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
