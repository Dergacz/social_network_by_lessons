import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0d85af83-16ac-4d7b-a6d4-3f759e1bbd76"
    }

});

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow (id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    unFollow (id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    }
}


export const headersAPI = {
    showMe () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }
}

export const profileAPI = {
    showProfileUser (userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus (userId: string) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus (status: string) {
        return instance.put("profile/status", {status: status})
            .then(response => {
                return response.data
            })
    }
}