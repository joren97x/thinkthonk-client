<template>
    <main class="bg-opacity-30">
        <component :is="$route.meta.layout || 'div'">
            <router-view></router-view>
        </component>
    </main>
</template>
