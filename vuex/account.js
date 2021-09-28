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
          if(data.status == 200){
            state.resident = data.results;
            state.errorMessage = null;
            }else{
             state.errorMessage = data.message
            }
          state.error = null;
   
        },
        changeIdentity(state, data){
            if(data.status == 200){
                state.identity = data.results;
                state.errorMessage = null;
                }else{
                 state.errorMessage = data.message
                };
            state.error = null;
        },
        changeTwoFaSubmit(state, data){
            if(data.status == 200){
                state.twoFA = data.results;
                state.errorMessage = null;
                }else{
                 state.errorMessage = data.message
                 console.log("message",  data.message);
                };
            state.error = null;
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
                    commit('setError', e.response.data.message);
                    reject(e);
                })
            })
        },
        changeIdentity:  ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/profile/identity', method: 'POST', data: data }).then(response => {
                    commit('changeIdentity', response.data);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError',  e.response.data.message);
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
                    commit('setError', e.response.data.message);
                    reject(e);
                })
            })
        },
    }
}