import axios from 'axios';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    timeout: 5000
});
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['USER-ID'] = '45132';
// axios.defaults.headers.post['TOKEN'] = '000ab6e33a310043c026f06ffd51517d';
// axios.defaults.headers.post['GUILD-ID'] = '5';

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);
service.interceptors.response.use(
    response => {
        loading.close();
        if (response.status === 200) {
            if (response.data.error !== 0) {
                if (response.data.redirect !== '') {
                    setInterval(() => {
                        second--;
                        MessageBox(response.data.msg).then(() => {
                            window.location.href = response.data.redirect;
                        });
                        if (second == 0) {
                            // window.location.href = response.data.redirect;
                        }
                    }, 1000);
                } else {
                }
            }
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
