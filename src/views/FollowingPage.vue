<script setup>

</script>

<template>
    <div class="mb-10">
        <div class="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide absolute">
            <div class="snap-center h-screen flex items-center justify-center bg-black">
                <video src="fatcat.mp4" autoplay muted loop class="w-full h-full">
                </video>
            </div>
            
            <div class="snap-center h-screen flex items-center justify-center bg-black">
                <video src="miss.mp4" autoplay muted loop class="w-full h-full">
                </video>
            </div>
            <div class="snap-center h-screen flex items-center justify-center bg-black">
                <video src="haerin.mp4" autoplay muted loop class="w-full h-full">
                </video>
            </div>
            <div class="snap-center h-screen flex items-center justify-center bg-black">
                <video src="dumbcat.mp4" autoplay muted loop class="w-full h-full">
                </video>
            </div>
            <div class="snap-center h-screen flex items-center justify-center bg-black relative">
                <video src="fatcat.mp4" autoplay muted loop class="w-full h-full"></video>
                <!-- Content overlay -->
                <div class="absolute bottom-4 left-4 text-white">
                    <p class="text-lg font-bold">🐮 NEW COSPLAY 🐮</p>
                    <p class="text-sm mt-1">Want sum chocolate? 🍫 For ppl asking! 💖</p>
                </div>
                <!-- Buttons -->
                <div class="absolute right-4 bottom-20 text-white flex flex-col items-center space-y-4">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="w-8 h-8">
                            <path d="M12 4.5l3.09 6.26L22 11.27l-5 4.87L18.18 21 12 17.27 5.82 21l1.09-5.86L2 11.27l6.91-1.51L12 4.5z" />
                        </svg>
                        <p class="text-xs mt-1">206.2K</p>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="w-8 h-8">
                            <path d="M9 21h6v-2H9v2zm3-18C8.79 3 6 5.79 6 9c0 2.78 2.22 5 5 5v7h2v-7c2.78 0 5-2.22 5-5 0-3.21-2.79-6-6-6z" />
                        </svg>
                        <p class="text-xs mt-1">1574</p>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="w-8 h-8">
                            <path d="M3 21v-2c0-1.1.9-2 2-2h2V7c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v10h2c1.1 0 2 .9 2 2v2H3z" />
                        </svg>
                        <p class="text-xs mt-1">19.3K</p>
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>

<style>
/* Hide scrollbar for all browsers */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}
</style>