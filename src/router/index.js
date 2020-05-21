import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '@/layout/index'),
            children: [
                {
                    path: '/home',
                    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/home'),
                    meta: { title: '首页' }
                }
            ]
        },
        {
            path: '/404',
            component: () => import(/* webpackChunkName: "404" */ '@/views/404'),
            meta: { title: '404' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
    // mode:'history'
});
