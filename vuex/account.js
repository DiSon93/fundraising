import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        verifyForm: {},
        resident: {},
        identity: {},
        twoFA: {},
        error: null,
        errorMessage: null,
    },
    mutations: {
        verifyAccount(state, data) {
            state.verifyForm = { ...state.verifyForm, ...data };
            console.log("verifyForm", state.verifyForm)
            state.error = null;
            state.errorMessage = null;
        },

        changeResident(state, data){
          state.resident = data;
          state.error = null;
          state.errorMessage = null;
        },
        changeIdentity(state, data){
            state.identity = data;
            state.error = null;
            state.errorMessage = null;
        },
        changeTwoFaSubmit(state, data){
            state.twoFA = data;
            state.error = null;
            state.errorMessage = null;
        },
        setError(state, data) {
            state.error = data;
            state.errorMessage = null;
            console.log("error", data);
        },
    },
    actions: {
        changeResident: ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/profile/resident', method: 'POST', data: data }).then(response => {
                    commit('changeResident', response.data);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        changeIdentity:  ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/profile/identity', method: 'POST', data: data }).then(response => {
                    commit('changeIdentity', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        changeTwoFaSubmit:  ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/profile/twofaSubmit', method: 'POST', data: data }).then(response => {
                    commit('changeTwoFaSubmit', response.data);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
    }
}