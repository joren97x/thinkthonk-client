import { createRouter, createWebHistory } from "vue-router";

import HomeLayout from "@/layouts/HomeLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const router = createRouter({
    history: createWebHistory(null),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomePage.vue'),
            name: 'HomePage',
            meta: { layout: HomeLayout }
        },
        {
            path: '/profile',
            component: () => import('../views/ProfilePage.vue'),
            name: 'ProfilePage',
            meta: { layout: HomeLayout }
        },
        {
            path: '/inbox',
            component: () => import('../views/InboxPage.vue'),
            name: 'InboxPage',
            meta: { layout: HomeLayout }
        },
        {
            path: '/search',
            component: () => import('../views/SearchPage.vue'),
            name: 'SearchPage',
            meta: { layout: HomeLayout }
        },
        {
            path: '/shop',
            component: () => import('../views/ShopPage.vue'),
            name: 'ShopPage',
            meta: { layout: HomeLayout }
        },
        {
            path: '/for-you',
            component: () => import('../views/HomePage.vue'),
            name: 'HomePage',
            meta: { layout: HomeLayout }
        },
        {
            path: '/followings',
            component: () => import('../views/FollowingPage.vue'),
            name: 'FollowingPage',
            meta: { layout: HomeLayout }
        },
        {
            path: '/upload',
            component: () => import('../views/UploadPage.vue'),
            name: 'UploadPage',
            meta: { layout: HomeLayout }
        },
        {
            path: '/login',
            component: () => import('../views/auth/LoginPage.vue'),
            name: 'LoginPage',
            meta: { layout: AuthLayout }
        },
        {
            path: '/register',
            component: () => import('../views/auth/RegisterPage.vue'),
            name: 'RegisterPage',
            meta: { layout: AuthLayout }
        },
        
    ]
})

export default router