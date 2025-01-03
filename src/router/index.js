import { createRouter, createWebHistory } from "vue-router";

import AuthLayout from "@/layouts/AuthLayout.vue";
import BottomNavigationBar from "@/layouts/BottomNavigationBar.vue";
import HomeHeader from "@/layouts/HomeHeader.vue";

const router = createRouter({
    history: createWebHistory(null),
    routes: [
        {
            path: '/',
            // component: () => import('../views/HomePage.vue'),
            components: {
                default: () => import('../views/HomePage.vue'),
                HomeHeader: HomeHeader,
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'HomePage',
        },
        {
            path: '/upload',
            component: () => import('../views/UploadPage.vue'),
            components: {
                default: () => import('../views/UploadPage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'UploadPage',
        },
        {
            path: '/profile',
            components: {
                default: () => import('../views/ProfilePage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'ProfilePage',
        },
        {
            path: '/edit-profile',
            components: {
                default: () => import('../views/EditProfilePage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'EditProfilePage',
        },
        {
            path: '/find-friends',
            components: {
                default: () => import('../views/FindFriendsPage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'FindFriendsPage',
        },
        {
            path: '/inbox',
            components: {
                default: () => import('../views/InboxPage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'InboxPage',
        },
        {
            path: '/search',
            components: {
                default: () => import('../views/SearchPage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'SearchPage',
        },
        {
            path: '/shop',
            components: {
                default: () => import('../views/ShopPage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'ShopPage',
        },
        {
            path: '/shop/product/:id',
            components: {
                default: () => import('../views/ViewProductPage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'ViewProductPage',
        },
        {
            path: '/cart',
            components: {
                default: () => import('../views/CartPage.vue'),
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'CartPage',
        },
        {
            path: '/for-you',
            components: {
                default: () => import('../views/HomePage.vue'),
                HomeHeader: HomeHeader,
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'ForYouPage',
        },
        {
            path: '/followings',
            components: {
                default: () => import('../views/FollowingPage.vue'),
                HomeHeader: HomeHeader,
                BottomNavigationBar: BottomNavigationBar
            },
            name: 'FollowingPage',
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