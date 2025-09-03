"use client"

import Cart from "@domains/cart";
import mockProductsList from "src/mockApi/meta";
import StyledButton from "@components/StyledButton";
import { redirect } from "next/navigation";
import { ApiEndpoints } from "@api/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import API from "@api/index";
import "./style.css"
import { setIsLoading } from "@store/slices/Application";

const TransactionInfoPage = () => {
    const cart = new Cart();

    if(cart === undefined) {
        return <div>ERROR</div>
    }

    const mockData = {
        amount: 1200,
        userId: 666,
        products: mockProductsList.map(items => items.id),
    }

    useEffect(()=>{
        const dispatch = useDispatch();

        try{
            dispatch(setIsLoading(true));

            API.request(ApiEndpoints.TRANSACTIONS, "POST", mockData);
        }
        catch{
            
        }
        finally{
            dispatch(setIsLoading(false));
        }
    }, [])

    fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mockData)
    })

    const transactionDate = Date();

    return(
        <div className="transaction-page-container">
            <div>Transaction page</div>
            <div>THE TRANSACTION IS COMPLETED</div>
            <div>Total price: {}</div>
            <div>{transactionDate}</div>
            
            <StyledButton label="Continue shopping" onClick={()=>redirect("/market")}/>
        </div>
    )
}

export default TransactionInfoPage;