import Vue from "vue";

export default ({ store, app }, inject) => {
    let helper = {
        notification(title, text, status) {
            let color = '';
            let position = 'top-right';
            let color_arr = {
                200: '#0b9985',
                422: 'danger'
            };
            
            store.commit('helper/notification', {
                title: title,
                text: text,
                color: color_arr[status],
                position:position
            }, { root: true })
        }
    }
    inject('helper', helper);
    // app.$helper = helper;
}