import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        packageList: [],
        incomingList: [],
        packageDetail: {},
        saleList: {},
        finishList: {},
        error: null,
        errorMessage: null,
    },
    mutations: {
        getPackageList(state, data){
           state.packageList = data;
           state.error = null;
           state.errorMessage = null;
        },
        getIncomingProjectList(state, data){
            state.incomingList = data;
            console.log("incoming", data);
            state.error = null;
            state.errorMessage = null;
        },
        getPackageDetail(state, data){
         state.packageDetail = data;
         state.error = null;
         state.errorMessage = null;
        },
        getSaleTokenProjectList(state, data){
            state.saleList = data;
            state.error = null;
            state.errorMessage = null;
        },
        getFinishProjectList(state, data){
            state.finishList = data;
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
        getPackageList: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/packages', method: 'GET' }).then(response => {
                    commit('getPackageList', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        getDetailPackage: ({ commit }, _id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: `/api/packages/${_id}`, method: 'GET' }).then(response => {
                    commit('getPackageDetail', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        getIncomingProjectList: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/packages/sale/incomming', method: 'GET' }).then(response => {
                    commit('getIncomingProjectList', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        getSaleTokenProjectList: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/packages/sale/token-sale', method: 'GET' }).then(response => {
                    commit('getSaleTokenProjectList', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        getFinishProjectList: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/packages/sale/finish', method: 'GET' }).then(response => {
                    commit('getFinishProjectList', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
    }
}