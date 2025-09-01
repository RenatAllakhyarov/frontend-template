"use client"

import Cart from "@domains/cart";
import StyledButton from "@components/StyledButton";
import { IProduct } from "@domains/product";
import { redirect } from "next/navigation";

interface ITransactionInfoPageProps {
    cart: Cart
}

const TransactionInfoPage = ({
    cart,
}: ITransactionInfoPageProps) => {
    if(cart === undefined) {
        return <div>ERROR</div>
    }

    const cartPrice = cart.getTotalPrice();

    const transactionDate = Date();

    return(
        <div className="transaction-page-container">
            <div>Transaction page</div>
            <div>THE TRANSACTION IS COMPLETED</div>
            <div>Total price: {cartPrice}</div>
            <div>{transactionDate}</div>
            
            <StyledButton label="Continue shopping" onClick={()=>redirect("/market")}/>
        </div>
    )
}

export default TransactionInfoPage;