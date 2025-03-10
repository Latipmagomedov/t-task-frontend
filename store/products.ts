import {defineStore} from 'pinia'
import {ref} from 'vue'
import {type IProduct} from "~/interfaces/IProducts"

export const useProductsStore = defineStore('products', () => {
    const basket = ref<IProduct[]>([])

    const addToBasket = (product: IProduct) => {
        if (basket.value.findIndex(i => i.id === product.id) >= 0) return
        basket.value.push(product)
    }

    return {addToBasket, basket}
})
