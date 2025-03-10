<template>
    <div class="app">
        <MainHeader/>
        <main class="app__main">
            <NuxtPage/>
        </main>
        <MainFooter/>
    </div>
</template>

<script setup lang="ts">
import MainHeader from "~/components/layout/MainHeader.vue"
import MainFooter from "~/components/layout/MainFooter.vue"
</script>

<style lang="scss" scoped>
.app {
    &__main {
        padding-top: 92px;
    }
}
</style>
