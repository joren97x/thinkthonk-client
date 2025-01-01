<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div class="sticky top-0 z-50 bg-opacity-30 bg-gradient-to-b from-black/80">
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
    <div class=" h-screen flex flex-col">

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto">
            <slot></slot>
        </main>
        <footer class="sticky inset-x-0 bottom-0 z-50 bg-black shadow">
            <div class="grid grid-cols-5 place-items-center text-white py-2">
                <!-- Home -->
                <router-link :to="{ name: 'HomePage' }">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <span class="text-xs mt-1">Home</span>
                    </div>
                </router-link>
                <!-- Shop -->
                <router-link :to="{ name: 'ShopPage' }">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>
                        <span class="text-xs mt-1">Shop</span>
                    </div>
                </router-link>
                <!-- Add -->
                <router-link :to="{ name: 'UploadPage' }">
                    <div class="flex flex-col items-center">
                        <div class="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full p-1">
                            <div class="bg-white rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </router-link>
                <!-- Inbox -->
                <router-link :to="{ name: 'InboxPage' }">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                        </svg>

                        <span class="text-xs mt-1">Inbox</span>
                    </div>
                </router-link>
                <!-- Profile -->
                <router-link :to="{ name: 'ProfilePage' }">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <span class="text-xs mt-1">Profile</span>
                    </div>
                </router-link>
            </div>
        </footer>
    </div>
</template>