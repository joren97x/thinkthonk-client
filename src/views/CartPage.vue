<script>
</script>

<template>
    <div class="sticky top-0 bg-white shadow-md">
        <!-- Back Button -->
        <div class="absolute left-0 flex items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </div>

        <!-- Centered Texts -->
        <div class="flex flex-col items-center justify-center h-full">
            <div class="text-center font-bold">
                Shopping Cart (2)
            </div>
            <div class="text-xs text-center flex text-gray-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Add address
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 mx-2">
        <div v-for="n in 2" :key="n">
            <div class="font-bold">Shop Name</div>
            <div class="flex items-center justify-between p-2 border-b border-gray-200">
                <div class="flex items-center gap-2">
                    <div class="w-16 h-16 bg-gray-200"></div>
                    <div>
                        <div class="font-bold">Product 1</div>
                        <div class="text-sm text-gray-600">₱10.00</div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button class="p-2 bg-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5h-15" />
                        </svg>
                    </button>
                    <div>2</div>
                    <button class="p-2 bg-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5v-15" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

