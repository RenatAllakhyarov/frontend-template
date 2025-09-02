import { IEmailRequest, IEmailResponse } from "@domains/email";
import { IProduct } from "@domains/product";
import {
    IVerifyCodeRequest,
    IVerifyCodeResponse,
} from "@domains/verificationCode";

const apiBaseUrl: string | undefined = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!apiBaseUrl) {
    throw new Error("You not loaded .env file for API!");
}

export type TApiMethods = "GET" | "POST";

export const enum ApiEndpoints {
    PRODUCTS = "products",
    TRANSACTIONS = "transactions",
    AUTH_EMAIL_REQUEST = "auth/email/request",
    AUTH_VERIFY_REQUEST = "auth/email/verify",
}

class API {
    public static request = async <T>(
        endpoint: ApiEndpoints,
        method: TApiMethods,
        body?: unknown
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

    public static sendEmailRequest = async (
        email: string
    ): Promise<IEmailResponse> => {
        const emailData: IEmailRequest = { email };

        return this.request<IEmailResponse>(
            ApiEndpoints.AUTH_EMAIL_REQUEST,
            "POST",
            emailData
        );
    };

    public static sendVerifyRequest = async (
        email: string,
        code: string
    ): Promise<Response> => {
        const verifyData: IVerifyCodeRequest = { email, code };

        return this.request(
            ApiEndpoints.AUTH_VERIFY_REQUEST,
            "POST",
            verifyData
        );
    };
}

export default API;
