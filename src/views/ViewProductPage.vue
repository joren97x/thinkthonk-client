<script setup>
import { ref } from "vue";

const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
];

const currentIndex = ref(0);

const handleSwipe = (direction) => {
    if (direction === "left") {
        currentIndex.value =
            (currentIndex.value + 1) % images.length; // Move forward
    } else if (direction === "right") {
        currentIndex.value =
            (currentIndex.value - 1 + images.length) % images.length; // Move backward
    }
};

let startX = 0;

const onTouchStart = (event) => {
    startX = event.touches[0].clientX;
};

const onTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (diffX > 50) {
        handleSwipe("left");
    } else if (diffX < -50) {
        handleSwipe("right");
    }
};
</script>

<template>
    <div class="sticky top-0 bg-white shadow-md z-500">
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
    <div class="relative w-full overflow-hidden h-1/2">
        <!-- Carousel -->
        <div class="flex transition-transform duration-300"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }" @touchstart="onTouchStart"
            @touchend="onTouchEnd">
            <div v-for="(image, index) in images" :key="index" class="flex-shrink-0 w-full">
                <img :src="image" class="w-full h-full object-cover rounded-lg" alt="Carousel Image" />
            </div>
        </div>
        <!-- Chip -->
        <div class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm rounded-full px-3 py-1">
            {{ currentIndex + 1 }} / {{ images.length }}
        </div>
    </div>
    <div class="relative w-full overflow-hidden h-1/2">
        <!-- Carousel -->
        <div class="flex transition-transform duration-300"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }" @touchstart="onTouchStart"
            @touchend="onTouchEnd">
            <div v-for="(image, index) in images" :key="index" class="flex-shrink-0 w-full">
                <img :src="image" class="w-full h-full object-cover rounded-lg" alt="Carousel Image" />
            </div>
        </div>
        <!-- Chip -->
        <div class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm rounded-full px-3 py-1">
            {{ currentIndex + 1 }} / {{ images.length }}
        </div>
    </div>
    <div class="mx-2">
        <div>
            <div class="font-bold"> ₱350.00 </div>
            <div class="">Lorem ipsum dolor sit amet.</div>
            <div class="text-sm flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 text-yellow-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                4.{{ (4 * 100) / 100 }} | {{ 4 * 100 }} sold
            </div>
        </div>
        <div>
            <div class="font-bold"> Customer Reviews </div>
            
        </div>
    </div>
    <div class="sticky top-0">
        <div>
            BRUHHH
        </div>
    </div>
    
</template>
