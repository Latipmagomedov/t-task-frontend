<template>
    <div class="v-added">Товар добавлен в <NuxtLink to="/" class="v-added__link">корзину</NuxtLink></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.v-added {
    height: 65px;
    padding: 0 24px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    background-color: var(--brand-color);
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;

    &__link {
        margin-left: 5px;
        text-decoration: underline;
    }
}
</style>
