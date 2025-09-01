import mockProductsList from "./meta";
import { IProduct } from "@domains/product";

const PRODUCT_LOAD_DELAY: number = 750;

class MockAPI {
    public static delay = (timeout: number): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, timeout);
        });
    };

    public static getProducts = async (): Promise<IProduct[]> => {
        await this.delay(PRODUCT_LOAD_DELAY);

        return mockProductsList;
    };
}

export default MockAPI;
