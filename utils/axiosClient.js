import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://fundraisingcore.demo.fit"
    // baseURL: 'http://localhost:8000'
})
//Tự động thêm authorization vào headers nếu có accexxToken
axiosClient.interceptors.request.use((config) => {
    // const {accessToken} = JSON.parse(localStorage.getItem("user") || {});
    // let user = null;
    if (process.client && localStorage.getItem("access_token")) {
        config.headers.common.Authorization = 'Bearer ' + localStorage.getItem("access_token");
    //  user = window.localStorage.getItem("user");
    }
    // if (user){
    //     const { access_token } =JSON.parse(user);
    //     config.headers.common.Authorization = `Bearer ${access_token}`;
    // }

    return config;
})

// axiosClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axiosClient.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axiosClient.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axiosClient.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// // axiosClient.defaults.headers = {
// //   'Content-Type': 'application/json',
// // 'Authorization': 'JWT fefege...' 
// // }
// axiosClient.defaults.mode = 'no-cors';

// axiosClient.defaults.withCredentials = true;
// axiosClient.defaults.credentials = 'same-origin';



axiosClient.interceptors.response.use(undefined, function (err) {
    return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            // nếu là lỗi chưa đăng nhập unauthorized, gọi lên logout
            // this.$store.dispatch('auth/AUTH_LOGOUT')
            // có thể đưa user về trang đăng nhập ở đây!
            localStorage.removeItem("user"); // <-- add your var
            window.location = "/login";  // <-- add your path
        }
        throw err;
    });
});


export default axiosClient;
