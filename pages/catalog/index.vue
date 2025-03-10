<template>
    <div class="catalog">
        <div class="container">
            <h1 class="catalog__title">Тестовая задача</h1>

            <div class="catalog__cards">
                <ProductCard
                    v-for="product in products.products"
                    :key="product.id"
                    :product="product"
                    @addToBasket="addToBasket"/>
            </div>
        </div>

        <VAddedToBasket v-if="showAddedToBasket" class="catalog__added-to-basket"/>
    </div>
</template>

<script setup lang="ts">
import {useProductsStore} from '~/store/products'
import ProductCard from "~/pages/catalog/components/ProductCard.vue"
import VAddedToBasket from "~/components/ui/VAddedToBasket.vue"
import {apiPath} from '~/utils/api'
import type {IProduct} from "~/interfaces/IProducts"

const nuxtApp = useNuxtApp()
const productsStore = useProductsStore()

const {data: products} = await useFetch(apiPath.products, {
    transform(input) {
        return {
            ...input as any,
            fetchedAt: new Date()
        }
    },
    getCachedData(key) {
        const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        if (!data) return

        const expirationDate = new Date(data.fetchedAt)
        expirationDate.setTime(expirationDate.getTime() + 10 * 20000)
        const isExpired = expirationDate.getTime() < Date.now()
        if (isExpired) return

        return data
    }
})

const showAddedToBasket = ref(false)
const addToBasket = (product: IProduct) => {
    productsStore.addToBasket(product)
    console.log(productsStore.basket)
    showAddedToBasket.value = true
    setTimeout(() => {
        showAddedToBasket.value = false
    }, 3000)
}
</script>

<style lang="scss" scoped>
.catalog {
    padding-bottom: 111px;

    &__title {
        margin-top: 32px;
        font-weight: 700;
        font-size: 32px;
        line-height: 100%;
    }

    &__cards {
        margin-top: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 30px;
    }

    &__added-to-basket {
        position: fixed;
        right: 40px;
        bottom: 40px;
        z-index: 99;
    }
}
</style>
