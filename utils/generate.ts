import {faker} from '@faker-js/faker'
import {path} from '@/utils/path'
import {type IProduct} from "~/interfaces/IProducts"

const generateFakeProduct = (): IProduct => {
    const hasOldPrice = faker.datatype.boolean()
    const newPrice = faker.commerce.price({min: 100, max: 100000})
    const oldPrice = hasOldPrice ? newPrice + faker.commerce.price({min: 10, max: 10000}) : undefined

    return {
        id: faker.number.int({min: 10, max: 10000}),
        image: faker.image.url(),
        newPrice: Number(newPrice),
        oldPrice: oldPrice ? Number(oldPrice) : undefined,
        brand: faker.company.name(),
        name: faker.commerce.productName(),
        url: path.products + '/' + faker.number.int({min: 10, max: 10000}),
    }
}

const getProducts = (quantity: number): IProduct[] => {
    const products: IProduct[] = []
    for (let i = 0; i < quantity; i++) {
        products.push(generateFakeProduct())
    }

    return products
}


export {getProducts, generateFakeProduct}
