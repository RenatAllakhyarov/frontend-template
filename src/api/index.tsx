import products from "@data/products.json";
import { IProduct } from "@domains/Product";

const networkLoading = (milliseconds: number) =>
    new Promise((result) => setTimeout(result, milliseconds));

export class API {
    //const response = await fetch('');

    static async getProducts(): Promise<IProduct[]> {
        console.log("Fetching products from API...");

        await networkLoading(1000);

        return products as IProduct[];
    }

    static async getProductById(id: string): Promise<IProduct | undefined> {
        await networkLoading(500);

        const productsData = products as IProduct[];

        return productsData.find((product) => product.id === id);
    }
}
