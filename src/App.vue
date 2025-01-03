
<template>
    <main class="">
        <component :is="$route.meta.layout || 'div'">
            <main class="flex flex-col">
                <router-view name="HomeHeader"></router-view>
                <div class="h-screen overflow-y-auto scrollbar-hide">
                    <router-view></router-view>
                </div>
                <router-view name="BottomNavigationBar"></router-view>
            </main>
        </component>
    </main>
</template>
