"use client";

import API from "@api/index";
import MockAPI from "src/mockApi";
import Cart from "@domains/cart";
import StyledButton from "@components/StyledButton";
import { ITransaction, TTransactionInfo } from "@domains/transaction";
import { getFormatDateToHHmmssDDmmYY } from "@utils/constants";
import { setIsLoading } from "@store/slices/Application";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@store/slices/Cart";
import { ICartProduct } from "@domains/cart";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { ApiEndpoints } from "@api/index";
import { TRootState } from "@store/index";
import "./style.css";

const TransactionInfoPage = () => {
    const [isTransactionRequestComplete, setIsTransactionRequestComplete] =
        useState<boolean>();
    const [transactionError, setTransactionError] = useState<string | null>();
    const [transactionInfo, setTransactionInfo] =
        useState<TTransactionInfo | null>();

    const dispatch = useDispatch();

    const cart: Cart = useSelector((state: TRootState) => state.cart.cart);

    const userId = useSelector((state: TRootState) => state.user.id);
    const cartProductsIdList: string[] = cart.getProducts().map((cartProduct: ICartProduct) => cartProduct.id);

    const transactionRequestData = {
        amount: cart.getTotalPrice(),
        userId: userId,
        products: cartProductsIdList,
    };

    const handleContinueShopping = (): void => {
        redirect("/market");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(setIsLoading(true));

                await MockAPI.delay(1000);

                const transactionResponse: ITransaction =
                    await API.request<ITransaction>(
                        ApiEndpoints.TRANSACTIONS,
                        "POST",
                        transactionRequestData
                    );

                const formattedDate: string = getFormatDateToHHmmssDDmmYY(
                    transactionResponse.createdAt
                );

                dispatch(clearCart());

                setTransactionInfo({
                    createdAt: formattedDate,
                    amount: transactionResponse.amount,
                });
                setIsTransactionRequestComplete(true);

                setTransactionError(null);
            } catch {
                setIsTransactionRequestComplete(false);

                setTransactionError(Error.toString);
            } finally {
                dispatch(setIsLoading(false));
            }
        };

        fetchData();
    }, []);

    return (
        <div className="transaction-page-container">
            <div className="info">
                {!!transactionInfo &&
                    isTransactionRequestComplete &&
                    transactionError === null && (
                        <div>
                            <div>Transaction page</div>
                            <div>THE TRANSACTION IS COMPLETED</div>
                            <div>Total price: {transactionInfo.amount}</div>
                            <div>{transactionInfo.createdAt}</div>
                        </div>
                    )}
                {isTransactionRequestComplete === false &&
                    transactionError !== null && (
                        <div>
                            <div>Transaction error: {transactionError}</div>
                        </div>
                    )}
            </div>
            <StyledButton
                label="Continue shopping"
                onClick={() => {
                    handleContinueShopping();
                }}
            />
        </div>
    );
};

export default TransactionInfoPage;
