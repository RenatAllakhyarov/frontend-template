"use client";

import CartPageHead from "@components/CartPageHead";
import CartProductList from "@components/CartProductList";
import { ReactElement } from "react";
import "./style.css";
import CartSideBar from "@components/CartSideBar";

const CartPage = (): ReactElement => {
    return (
        <div className="cart-page">
            <CartPageHead />
            <div className="cart-page-content">
                <div className="cart-page-content-left">
                    <CartProductList />
                </div>
                <div className="cart-page-content-right">
                    <CartSideBar/>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
