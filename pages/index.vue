<template>
    <div class="home">
        <NuxtLink to="/catalog" class="home__link">
            Перейти в раздел каталога
        </NuxtLink>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: calc(100dvh - 184px);
    display: flex;
    align-items: center;
    justify-content: center;

    &__link {
        font-weight: 500;
        font-size: 32px;
        text-decoration: underline;
        color: var(--brand-color);
    }
}
</style>
