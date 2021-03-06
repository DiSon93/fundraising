import axiosClient from "~/utils/axiosClient";

// let currentUser = null;
// if (process.client) {
//     currentUser = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : "";
// }

export default {
    namespaced: true,
    state: {
        currentUser: null,
        register: null,
        logout: null,
        error: null,
        errorMessage: null,
    },
    mutations: {
        registerUser(state, data) {
            if(data.status == 200){
                state.register = data.results;
                state.errorMessage = null;
                }else{
                 state.errorMessage = data.message
                }
            state.error = null;

        },
        setUser(state, data) {
            state.currentUser = data;
            state.errorMessage = null;
            state.error = null;
        },
        commitUser(state, data){
            state.currentUser = data;
            state.errorMessage = null;
            state.error = null;
        },
        setError(state, data) {
            state.error = data;
            state.errorMessage = null;
        },
        logoutUser(state, data){
            state.logout = data;
            state.errorMessage = null;
            state.error = null;
        }
    },
    actions: {
        registerIntoServer: ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/auth/register', method: 'POST', data: data }).then(response => {
                    commit('registerUser', response.data);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response.data);
                    reject(e);
                })
            })
        },
        loginIntoServer: ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/auth/login', method: 'POST', data: data }).then(response => {
                    if (process.client && response.data.status == 200) {
                        localStorage.setItem("access_token", response.data.results.access_token);
                        window.location = '/dashboard';
                        // commit('setUser', response.data);
                    }
                    
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.message);
                    reject(e);
                })
            })
        },
        logoutUser: ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/auth/logout', method: 'POST', data: data }).then(response => {
                    if (process.client && response.data.status == 200) {
                        localStorage.removeItem("access_token");
                    }
                    commit('logoutUser', response.data);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response.data);
                    reject(e);
                })
            })
        },
        verifyUser: ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/auth/verify', method: 'POST', data: data }).then(response => {
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response.data);
                    reject(e);
                })
            })
        },
        fetchUser: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/auth/user-profile', method: 'GET' }).then(response => {
                    if (process.client && response.data.status == 200) {
                        commit('setUser', response.data.results);
                    }

                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response.data);
                    reject(e);
                    window.location = '/login';
                })
            })
        }
    }
}