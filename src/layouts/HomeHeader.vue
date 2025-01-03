<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
    <div class="absolute top-0 z-50 bg-opacity-30 bg-gradient-to-b from-black/80 h-16 w-full">
        <div class="flex items-center justify-between p-3 text-white" aria-label="Global">
            <div class="flex lg:flex-1">
                <router-link :to="{ name: 'HomePage' }" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        alt="">
                </router-link>
            </div>
            <router-link :to="{ name: 'FollowingPage' }">
                <button :class="{ 'font-bold border-b-2 border-white font-extrabold': route.name === 'FollowingPage' }"
                    class="px-4 pb-1 transition font-bold">
                    Following
                </button>
            </router-link>
            <router-link :to="{ name: 'HomePage' }">
                <button :class="{ 'font-bold border-b-2 border-white font-extrabold': route.name === 'HomePage' }"
                    class="px-4 pb-1 transition font-bold">
                    For You
                </button>
            </router-link>
            <div class="flex">
                <router-link type="button" :to="{ name: 'SearchPage' }"
                    class="-m-2.5 inline-flex items-center text-white font-extrabold justify-center rounded-md p-2.5">
                    <span class="sr-only">Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>