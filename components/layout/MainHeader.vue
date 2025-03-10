<template>
    <header class="header">
        <div class="header__wrapper container">
            <NuxtLink to="/" class="header__title">Brand Name</NuxtLink>

            <div class="header__basket">
                <img src="@/assets/icons/basket.svg" class="header__basket-icon" alt="basket">

                <div class="header__basket-label">{{ productsStore.basket?.length }} товаров</div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import {useProductsStore} from '~/store/products'

const productsStore = useProductsStore();
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 92px;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
    z-index: 999;

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        font-weight: 700;
        font-size: 32px;
    }

    &__basket {
        margin-right: 85px;
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;

        &-icon {
            width: 32px;
        }

        &-label {
            margin-left: 10px;
            font-weight: 400;
            font-size: 14px;
        }
    }
}
</style>
