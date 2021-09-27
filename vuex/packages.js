import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        packageList: [],
        error: null,
        errorMessage: null,
    },
    mutations: {
        getPackageList(state, data){
           state.packageList = data;
           console.log("data", data);
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

    }
}