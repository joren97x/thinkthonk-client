<script setup>



</script>

<template>
    <div class="mt-8 flex items-center justify-center gap-x-6">
        <img class="inline-block size-20 rounded-full ring-2 ring-white"
            src="max.jpg"
            alt="">
    </div>
    <div class="mt-5 flex items-center justify-center gap-x-6 font-bold text-xl">
        @Napattarapon
    </div>
    <div class="grid grid-cols-3 mx-10 mt-2">
        <div>
            <div class="text-center">
                <div class="text-pretty text-lg font-medium sm:text-xl/8">0</div>
                <div class="text-pretty text-gray-500 text-sm">Following</div>
            </div>
        </div>
        <div>
            <div class="text-center">
                <div class="text-pretty text-lg font-medium sm:text-xl/8">0</div>
                <div class="text-pretty text-gray-500 text-sm">Followers</div>
            </div>
        </div>
        <div>
            <div class="text-center">
                <div class="text-pretty text-lg font-medium sm:text-xl/8">0</div>
                <div class="text-pretty text-gray-500 text-sm">Posts</div>
            </div>
        </div>
    </div>
    <div class="text-center grid grid-cols-2 mx-5 gap-2 mt-3">
        <div class="border-r border-gray-300 bg-gray-200 rounded-lg py-2">
            <router-link :to="{ name: 'EditProfilePage' }">
                Edit profile
            </router-link>
        </div>
        <div class="border-r border-gray-300 bg-gray-200 rounded-lg py-2">
            <router-link :to="{ name: 'FindFriendsPage' }">
                Find friends
            </router-link>
        </div>
    </div>
    <div class="text-center my-4">
        No bio yet.
    </div>
    <div class="grid grid-cols-2 items-center bg-white border-y border-gray-300 py-2">
        <div class="flex items-center justify-center gap-x-6">
            <a href="#" class="flex items-center text-gray-500 hover:text-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

            </a>
        </div>

        <div class="flex items-center justify-center gap-x-6">
            <!-- Company -->
            <a href="#" class="flex items-center text-gray-500 hover:text-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>

                <!-- Likes -->
            </a>
        </div>
    </div>
    <div class="grid grid-cols-2 gap-1 mx-1">
        <div class="bg-gray-200 h-48 w-full" v-for="n in 6" :key="n">
        </div>
    </div>
</template>
