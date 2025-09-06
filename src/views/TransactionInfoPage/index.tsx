"use client"

import API from "@api/index";
import MockAPI from "src/mockApi";
import mockProductsList from "src/mockApi/meta";
import StyledButton from "@components/StyledButton";
import { setIsLoading } from "@store/slices/Application";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { ApiEndpoints } from "@api/index";
import { TRootState } from "@store/index";
import "./style.css"
import { clearCart } from "@store/slices/Cart";

const TransactionInfoPage = () => {
    const [isTransactionRequestComplete, setIsTransactionRequestComplete] = useState<boolean>()
    const [transactionError, setTransactionError] = useState<string | null>();

    const dispatch = useDispatch();
    
    const cart = useSelector((state: TRootState) => state.cart);

    const userId = useSelector((state: TRootState) => state.user.id);   
   
    const mockData = {
        amount: 1200,
        userId: userId,
        products: mockProductsList.map(items => items.id),
    }

    const handleContinueShopping = (): void => {
        dispatch(clearCart());

        redirect("/market");
    }

    useEffect(()=>{
        const fetchData = async () => {
            try{
                dispatch(setIsLoading(true))

                await MockAPI.delay(1000);

                await API.request(ApiEndpoints.TRANSACTIONS, "POST", mockData);

                setIsTransactionRequestComplete(true);

                setTransactionError(null);
            }
            catch{
                setIsTransactionRequestComplete(false);

                setTransactionError(Error.toString);
            }
            finally{
                dispatch(setIsLoading(false));
            }
        }
        
        fetchData();
    }, [])
    
    const transactionDate = Date();
    
    if(cart === undefined) {
        return <div>ERROR</div>
    }

    return(
        <div className="transaction-page-container">
            {isTransactionRequestComplete && transactionError === null && (
                <div>
                    <div>Transaction page</div>
                    <div>THE TRANSACTION IS COMPLETED</div>
                    <div>Total price: {}</div>
                    <div>{transactionDate}</div>
                </div>
            )}

            {isTransactionRequestComplete === false && transactionError !== null && (
                <div>
                    <div>Transaction error: {transactionError}</div>
                </div>
            )}
            
            <StyledButton
                label="Continue shopping" 
                onClick={()=>{handleContinueShopping()}}
            />
        </div>
    )
}

export default TransactionInfoPage;