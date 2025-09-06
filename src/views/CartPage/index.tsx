"use client";

import CartSideBar from "@components/CartSideBar";
import CartPageHeader from "@components/CartPageHeader";
import CartProductList from "@components/CartProductList";
import { ReactElement } from "react";
import "./style.css";

const CartPage = (): ReactElement => {
    return (
        <div className="cart-page">
            <CartPageHeader />
            <div className="cart-page-content">
                <div className="cart-page-content-left">
                    <span className="cart-product-list-title">
                        Товары в наличии
                    </span>
                    <CartProductList />
                </div>
                <div className="cart-page-content-right">
                    <CartSideBar />
                </div>
            </div>
        </div>
    );
};

export default CartPage;
