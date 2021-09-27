import axiosClient from "~/utils/axiosClient";

export default {
    namespaced: true,
    state: {
        blogList: [],
        blogDetail: {},
        categories: [],
        error: null,
        errorMessage: null,
    },
    mutations: {
        getBlogList(state, data) {
            state.blogList = data;
            state.error = null;
            state.errorMessage = null;
        },
        getCategoryList(state, data){
            state.categories = data;
            state.error = null;
            state.errorMessage = null;
        },
        setError(state, data) {
            state.error = data;
            state.errorMessage = null;
        },
        getBlogDetail(state, data){
            state.blogDetail = data;
            state.error = null;
            state.errorMessage = null;
        }
    },
    actions: {
        getBlogList: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/blogs', method: 'GET'}).then(response => {
                    commit('getBlogList', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        getCategoryList: ({ commit }) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: '/api/categories', method: 'GET'}).then(response => {
                    commit('getCategoryList', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        },
        getBlogDetail: ({ commit }, _id) => {
            return new Promise((resolve, reject) => {
                axiosClient({ url: `/api/blogs/${_id}`, method: 'GET'}).then(response => {
                    commit('getBlogDetail', response.data.results);
                    resolve(response.data);
                }).catch(e => {
                    commit('setError', e.response);
                    reject(e);
                })
            })
        }, 

    }
}