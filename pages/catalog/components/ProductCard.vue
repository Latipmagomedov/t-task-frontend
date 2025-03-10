<template>
    <div class="card">
        <NuxtLink :to="product.url" class="card__body">
            <div class="card__image">
                <img :src="product.image" :alt="product.name">
                <span class="card__discount">-35%</span>
            </div>

            <div class="card__prices">
                <div class="card__price">{{ product.newPrice?.toLocaleString() }} ₽</div>
                <div class="card__oldprice">1 610 ₽</div>
            </div>

            <div class="card__brand">{{ product?.brand }}</div>

            <div class="card__name">{{ product.name }}</div>
        </NuxtLink>

        <VButton name="В корзину" @click="emit('addToBasket', product)" class="card__btn"/>

        <div class="card__wrapper"></div>
    </div>
</template>

<script setup lang="ts">
import type {IProduct} from "~/interfaces/IProducts"
import VButton from "~/components/ui/VButton.vue"

defineProps<{
    product: IProduct
}>()

const emit = defineEmits(['addToBasket'])
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    cursor: pointer;

    &__body {
        position: relative;
    }

    &__image {
        position: relative;
        width: 201px;
        height: 201px;
        border-radius: 12px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__discount {
        position: absolute;
        bottom: 6px;
        left: 6px;
        height: 20px;
        padding: 0 5px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        background-color: #fff;
        color: var(--brand-color);
        font-weight: 400;
        font-size: 12px;
    }

    &__prices {
        margin-top: 12px;
        display: flex;
        align-items: flex-end;
    }

    &__price {
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
    }

    &__oldprice {
        margin-left: 8px;
        color: rgba(153, 153, 153, 1);
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;
        text-decoration: line-through;
    }

    &__brand {
        margin-top: 3px;
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
    }

    &__name {
        height: 34px;
        margin-top: 3px;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
    }

    &__btn {
        position: absolute;
        display: none;
        margin-top: 10px;
    }

    &__wrapper {
        opacity: 0;
        position: absolute;
        left: -24px;
        top: -24px;
        width: 249px;
        height: 386px;
        border-radius: 16px;
        background-color: #fff;
        box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
        z-index: 9;
    }

    &:hover {
        z-index: 10;
    }

    &:hover &__body {
        z-index: 10;
    }

    &:hover &__btn {
        display: block;
        z-index: 10;
    }

    &:hover &__wrapper {
        opacity: 1;
    }
}
</style>
