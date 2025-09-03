"use client";

import CartPageHead from "@components/CartPageHead";
import CartProductList from "@components/CartProductList";
import { ReactElement } from "react";
import "./style.css";

const CartPage = (): ReactElement => {
    return (
        <div className="cart-page">
            <CartPageHead />
            <div className="cart-page-content">
                <div className="cart-page-content-left"> </div>
                    <CartProductList />
                <div className="cart-page-content-right"></div>
            </div>
        </div>
    );
};

export default CartPage;
