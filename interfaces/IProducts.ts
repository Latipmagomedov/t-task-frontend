interface IProduct {
    id: number;
    image: string;
    newPrice: number;
    oldPrice?: number;
    brand: string;
    name: string;
    url: string;
}

interface IData {
    products: IProduct[];
}

export type {IData, IProduct}
