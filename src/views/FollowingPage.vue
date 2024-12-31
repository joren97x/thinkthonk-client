
<script setup>

</script>

<template>
  
<div>
     <!-- Reel Post 1 -->
     <div class="flex flex-col items-center p-4">
        <!-- Video Content -->
        <div class="w-full max-w-md bg-black aspect-video relative">
          <video
            src="your-video-url.mp4"
            class="w-full h-full object-cover"
            controls
          ></video>
          <!-- Optional: Add play icon overlay -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/40 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.752 11.168l-3.197-1.97A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-1.97a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 10c0-4.418-3.582-8-8-8S3 5.582 3 10a8 8 0 0016 0z"
              />
            </svg>
          </div>
        </div>
        <!-- Post Description -->
        <div class="mt-2 w-full max-w-md">
          <p class="text-gray-900 text-sm">
            F11 - KASHI 🎵 <br />
            <span class="text-gray-500">
              hahaha alam kong late na ako pero som abay lang ako sa trend 😅😅
            </span>
          </p>
        </div>
        <!-- Actions Section -->
        <div
          class="flex items-center justify-between w-full max-w-md mt-2 text-gray-700"
        >
          <!-- Likes -->
          <button class="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 16.343l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <span>125</span>
          </button>
          <!-- Comments -->
          <button class="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 16v2a2 2 0 01-2 2H5l-4 4V4a2 2 0 012-2h14a2 2 0 012 2v12z"
              />
            </svg>
            <span>7</span>
          </button>
          <!-- Shares -->
          <button class="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 9l-6 6-6-6"
              />
            </svg>
            <span>6</span>
          </button>
        </div>
      </div>
</div>

</template>



