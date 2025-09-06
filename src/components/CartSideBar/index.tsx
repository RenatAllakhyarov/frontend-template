"use client";

import StyledButton from "@components/StyledButton";
import CartSideBarInfo from "@components/CartSideBarInfo";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import { ReactElement } from "react";
import "./style.css";

const CartSideBar = (): ReactElement => {
    const productsCount: number = useSelector((state: TRootState) =>
        state.cart.cart.getProductsCount()
    );

    return (
        <div className="cart-side-bar">
            <CartSideBarInfo />
            <StyledButton
                label="Перейти к оформлению"
                onClick={() => {
                    redirect("/transaction");
                }}
                disabled={productsCount === 0}
                className="checkout-button"
            />
        </div>
    );
};

export default CartSideBar;
