import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        ticketList: {},
        newTicket: {},
        error: null,
        errorMessage: null,
    },
    mutations: {
        checkTicketList(state, data){
          state.ticketList = data;
          state.error = null;
          state.errorMessage = null;
        },
        setError(state, data) {
            state.error = data;
            state.errorMessage = null;
            console.log("error", data);
        },
        createTicket(state, data){
            state.newTicket = data;
            state.error = null;
            state.errorMessage = null; 
        }
    },
    actions: {
        checkTicketList: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/ticket', method: 'GET' }).then(response => {
                    commit('checkTicketList', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        createTicket:  ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/ticket/upload', method: 'POST', data: data }).then(response => {
                    commit('createTicket', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },

    }
}