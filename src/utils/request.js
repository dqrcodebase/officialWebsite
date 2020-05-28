import axios from 'axios';

let baseURL = process.env.NODE_ENV === 'development' ? '/api' : ''  //判断如果是在开发环境下时就进行反向代理
const service = axios.create({
    baseURL,
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    timeout: 5000
});
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['USER-ID'] = '45132';
// axios.defaults.headers.post['TOKEN'] = '000ab6e33a310043c026f06ffd51517d';
// axios.defaults.headers.post['GUILD-ID'] = '5';

service.interceptors.request.use(
    config => {
        // if (process.env.NODE_ENV == 'development') {   //判断在开发环境下加上 api 这个字符串进行反向代理
        //     config.url = 'api' + config.url;
        // }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
