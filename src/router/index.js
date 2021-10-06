import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
        meta: { guest: true },
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { requiresAuth: false },
    },
]

//create router
const router = new VueRouter({
    mode: "history",
    routes  // config routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.guest)) {
        if (store.getters.isAuthenticated) {
            next('/')
            return
        }
        next()
    } else {
        next()
    }
})

export default router