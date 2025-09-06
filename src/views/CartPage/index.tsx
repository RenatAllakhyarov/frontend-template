"use client";

import EmptyCart from "@components/EmptyCart";
import CartSideBar from "@components/CartSideBar";
import CartPageHeader from "@components/CartPageHeader";
import CartProductList from "@components/CartProductList";
import { ICartProduct } from "@domains/cart";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import { ReactElement } from "react";
import "./style.css";

const CartPage = (): ReactElement => {
    const cartProducts: ICartProduct[] = useSelector((state: TRootState) =>
        state.cart.cart.getProducts()
    );

    return (
        <div className="cart-page">
            <CartPageHeader />
            {cartProducts.length === 0 && (
                <div className="empty-cart">
                    <EmptyCart />
                </div>
            )}

            {cartProducts.length > 0 && (
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
            )}
        </div>
    );
};

export default CartPage;
