"use client"

import API from "@api/index";
import Cart from "@domains/cart";
import MockAPI from "src/mockApi";
import mockProductsList from "src/mockApi/meta";
import StyledButton from "@components/StyledButton";
import { setIsLoading } from "@store/slices/Application";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { ApiEndpoints } from "@api/index";
import "./style.css"

const TransactionInfoPage = () => {
    const [isTransactionRequestValid, setIsTransactionRequestValid] = useState<boolean>()

    const cart = new Cart();

    if(cart === undefined) {
        return <div>ERROR</div>
    }

    const mockData = {
        amount: 1200,
        userId: 666,
        products: mockProductsList.map(items => items.id),
    }

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData = async () => {
            try{
                dispatch(setIsLoading(true));

                await MockAPI.delay(3000);

                await API.request(ApiEndpoints.TRANSACTIONS, "POST", mockData);

                setIsTransactionRequestValid(true);
            }
            catch{
                console.log(Error);

                setIsTransactionRequestValid(false);
            }
            finally{
                dispatch(setIsLoading(false));
            }
        }

        fetchData();
    }, [])

    const transactionDate = Date();

    return(
        <div className="transaction-page-container">
            {isTransactionRequestValid && (
                <div>
                    <div>Transaction page</div>
                    <div>THE TRANSACTION IS COMPLETED</div>
                    <div>Total price: {}</div>
                    <div>{transactionDate}</div>
                </div>
            )}

            {isTransactionRequestValid === false && (
                <div>
                    <div>Transaction error</div>
                </div>
            )}
            
            <StyledButton label="Continue shopping" onClick={()=>redirect("/market")}/>
        </div>
    )
}

export default TransactionInfoPage;