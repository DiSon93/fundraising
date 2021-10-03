import Vue from 'vue';

export default {
    namespaced: true,
    mutations: {
        notification(state, data) {
            this._vm.$vs.notification({
                flat: true,
                progress: "auto",
                color: data.color,
                position: data.position,
                title: data.title,
                text: data.text
            })
        }
    }
}