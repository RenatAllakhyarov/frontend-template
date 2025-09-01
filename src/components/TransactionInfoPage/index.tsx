"use client"

import Cart from "@domains/cart";
import StyledButton from "@components/StyledButton";
import { redirect } from "next/navigation";
import { IProduct } from "@domains/product";

const MockData: IProduct[] = [
    {
        id: "0",
        title: "FNAF WORLD",
        author: "SCOT CAWTON",
        price: 1987,
        description: "sex",
        stock: 10,
        createdAt: "1987"
    },
    {
        id: "0",
        title: "FNAF WORLD",
        author: "SCOT CAWTON",
        price: 1987,
        description: "sex",
        stock: 10,
        createdAt: "1987"
    },
    {
        id: "0",
        title: "FNAF WORLD",
        author: "SCOT CAWTON",
        price: 1987,
        description: "sex",
        stock: 10,
        createdAt: "1987"
    },
]

interface ITransactionInfoPageProps {
    cart: Cart
}

const TransactionInfoPage = ({
    cart
}: ITransactionInfoPageProps) => {
    if(cart === undefined) {
        return <div>ERROR</div>
    }

    cart.addProduct(MockData[0]);
    cart.addProduct(MockData[1]);
    cart.addProduct(MockData[2]);

    const transactionDate = Date();

    return(
        <div className="transaction-page-container">
            <div>Transaction page</div>
            <div>THE TRANSACTION IS COMPLETED</div>
            <div>{transactionDate}</div>
            
            <StyledButton label="Continue shopping" onClick={()=>redirect("/market")}/>
        </div>
    )
}

export default TransactionInfoPage;