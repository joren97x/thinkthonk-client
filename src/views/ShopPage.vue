<script setup>
</script>

<template>
    <!-- Search Bar and Cart Button -->
    <div class="sticky top-0 ">
        <div class="flex bg-white border-b py-2 border-gray-200 items-center">
            <input type="text" placeholder="Search"
                class="flex-grow px-4 py-2 border border-gray-300 rounded-lg mx-2" />
            <router-link :to="{ name: 'CartPage' }" class="p-2 hover:bg-blue-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </router-link>
        </div>

        <!-- Scrollable Categories -->
        <div class="flex bg-white border-b py-2 border-gray-200 overflow-x-auto scrollbar-hide">
            <div class="flex space-x-4 mx-2">
                <div class="flex items-center text-blue-600 hover:text-blue-700 transition whitespace-nowrap">
                    All
                </div>
                <div class="flex items-center text-gray-500 hover:text-gray-700 transition whitespace-nowrap">
                    Men
                </div>
                <div class="flex items-center text-gray-500 hover:text-gray-700 transition whitespace-nowrap">
                    Women
                    <span class="bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t"></span>
                </div>
                <div class="flex items-center text-gray-500 hover:text-gray-700 transition whitespace-nowrap">
                    Kids
                </div>
                <div class="flex items-center text-gray-500 hover:text-gray-700 transition whitespace-nowrap">
                    Appliances
                </div>
                <div class="flex items-center text-gray-500 hover:text-gray-700 transition whitespace-nowrap">
                    Shoes
                </div>
                <div class="flex items-center text-gray-500 hover:text-gray-700 transition whitespace-nowrap">
                    Accessories
                </div>
            </div>
        </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-2 gap-2 gap-y-6 mx-2 ">
        <div v-for="n in 12" :key="n">
            <router-link :to="{ name: 'ViewProductPage', params: { id: n } }">
                <div class="bg-gray-200 h-48 w-full">
                </div>
                <div class="mx-1">
                    <div class="line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div class="font-bold">₱145.00</div>
                    <div class="text-sm flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-yellow-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        4.{{ (n * 100) / 100 }} | {{ n * 100 }} sold
                    </div>
                </div>
                
            </router-link>
        </div>
    </div>
</template>
