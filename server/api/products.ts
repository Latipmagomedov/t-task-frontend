import {getProducts} from "~/utils/generate"

export default defineEventHandler((event) => {
    return {
        products: getProducts(12)
    }
})
