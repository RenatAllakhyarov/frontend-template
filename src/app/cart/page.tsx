"use client"

import StyledButton from "@components/StyledButton";
import { redirect } from "next/navigation";

const CartPage = () => {
    return(
        <div className="cart-page-container">
            <div>Cart page</div>

            <StyledButton label="buy" onClick={()=>redirect("/transaction")}/>
        </div>
    )
};

export default CartPage;
