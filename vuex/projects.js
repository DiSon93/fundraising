import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        registerForm: {},
        register: null,
        error: null,
        errorMessage: null,
    },
    mutations: {
        registerProject(state, data) {
            state.registerForm = { ...state.registerForm, ...data };
            console.log("registerForm",state.registerForm)
            state.error = null;
            state.errorMessage = null;
        },
        registerProjectIntoServer(state, data){
            if(data.status == 200){
                state.register =  data.results;
                state.errorMessage = null;
            }else{
                 state.errorMessage = data.message;
            }
           
            state.error = null;
           
        },
        setError(state, data) {
            state.error = data;
            state.errorMessage = null;
            console.log("error", data);
        },
    },
    actions: {
        registerProjectIntoServer: ({ commit }, data) => {
            console.log("AAA")
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/projects/register', method: 'POST', data: data }).then(response => {
                    commit('registerProjectIntoServer', response.data);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },

    }
}