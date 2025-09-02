export interface IVerifyCodeRequest {
    email: string;
    code: string;
}

export interface IVerifyCodeResponse {
    ok?: boolean;
    userExists?: boolean;
    error?: string;
}
