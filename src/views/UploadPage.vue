<script setup>
</script>

<template>
    <div>
        <header class="absolute inset-x-0 top-0 z-50 bg-white shadow-md">
            <nav class="flex items-center justify-start mt-2 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1 ml-2">
                    <router-link :to="{ name: 'HomePage' }" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </router-link>
                </div>
                <div class="w-full text-center absolute font-bold">Upload</div>
            </nav>
            <div class="grid grid-cols-3 p-2 text-center mt-2">
                <div>All</div>
                <div>Videos</div>
                <div>Photos</div>
            </div>
        </header>
        <div class="mt-10">
           
            <div class="grid grid-cols-3 gap-1 mx-1">
                <div class="bg-gray-300 h-40 w-full" v-for="n in 15" :key="n"></div>
            </div>
        </div>
    </div>
</template>