<script setup>

</script>

<template>
    <div class="">
        <div class="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
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