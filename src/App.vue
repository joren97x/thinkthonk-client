<template>
    <main>
        <component :is="$route.meta.layout || 'div'">
            <router-view></router-view>
        </component>
    </main>
</template>
