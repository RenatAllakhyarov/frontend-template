import { IProduct } from "@domains/product";

const apiBaseUrl: string | undefined = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!apiBaseUrl) {
    throw new Error("You not loaded .env file for API!");
}

export type TApiMethods = "GET" | "POST";

export const enum ApiEndpoints {
    PRODUCTS = "products",
    TRANSACTIONS = "transactions",
}

class API {
    public static request = async <T>(
        endpoint: ApiEndpoints,
        method: TApiMethods,
        body?: BodyInit
    ): Promise<T> => {
        const fullUrl: string = `${apiBaseUrl}${endpoint}`;

        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };
        const currentBody: BodyInit | undefined = !body
            ? undefined
            : JSON.stringify(body);

        const config: RequestInit = {
            headers,
            method,
            body: currentBody,
        };

        const response = await fetch(fullUrl, config);

        if (!response.ok) {
            throw new Error(
                `[HTTP] Error: ${response.status} ${response.statusText}`
            );
        }

        return (await response.json()) as T;
    };

    public static getProducts = async (): Promise<IProduct[]> => {
        return this.request<IProduct[]>(ApiEndpoints.PRODUCTS, "GET");
    };
}

export default API;
