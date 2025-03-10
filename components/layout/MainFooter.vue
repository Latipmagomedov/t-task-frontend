<template>
    <footer class="footer">
        <div class="footer__wrapper container">
            <NuxtLink to="/" class="footer__title">Brand Name</NuxtLink>

            <div class="footer__info">
                Разработчик
                <a href="#">Иванов Сергей</a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 92px;
    display: flex;
    align-items: center;
    background-color: #000;
    color: #fff;

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        font-weight: 700;
        font-size: 32px;
    }

    &__info {
        margin-right: 97px;
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;

        a {
            color: #fff;
            text-decoration: underline;
        }
    }
}
</style>
