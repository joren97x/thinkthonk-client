<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <router-link :to="{ name: 'HomePage' }" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
                    </router-link>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#" class="text-sm/6 font-semibold text-gray-900">Product</a>
                    <a href="#" class="text-sm/6 font-semibold text-gray-900">Features</a>
                    <a href="#" class="text-sm/6 font-semibold text-gray-900">Marketplace</a>
                    <a href="#" class="text-sm/6 font-semibold text-gray-900">Company</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span
                            aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
        <slot></slot>
        <footer class="absolute inset-x-0 bottom-0 z-50 text-center">
            <div class="py-5">
                <div v-if="route.name == 'RegisterPage'" class="">
                    Already have an account? <router-link :to="{ name: 'LoginPage' }">
                        <span class="font-bold">
                            Login
                        </span>
                        </router-link>
                </div>
                <div v-else>
                    Don't have an account? <router-link :to="{ name: 'RegisterPage' }">
                        <span class="font-bold">
                            Sign up
                        </span>
                    </router-link>
                </div>
            </div>
        </footer>
    </div>
</template>