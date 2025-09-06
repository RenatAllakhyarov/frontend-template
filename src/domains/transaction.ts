export interface ITransaction {
    amount: number,
    createdAt: string,
    products: string[],
    userId: string,
}

export type TTransactionInfo = Pick<ITransaction, "amount" | "createdAt">; 