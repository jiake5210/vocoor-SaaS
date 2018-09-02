
/*
    Home
*/
export default [
    {
        path : '/',
        redirect : '/home'
    },
    {
        name : 'home',
        path : '/home',
        component : resolve => require(['@/views/home/home.vue'], resolve),
        meta : {}
    }
]
