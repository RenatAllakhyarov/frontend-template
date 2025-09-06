"use client";

import Cart from "@domains/cart";
import StyledButton from "@components/StyledButton";
import { getFormatProductCounts } from "@utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@store/slices/Cart";
import { TRootState } from "@store/index";
import { ReactElement } from "react";
import "./style.css";

const CartPageHeader = (): ReactElement => {
    const dispatch = useDispatch();

    const cart: Cart = useSelector((state: TRootState) => state.cart.cart);

    const productsCount: number = cart.getProductsCount();

    const handleClearCart = (): void => {
        dispatch(clearCart());
    };

    const wordForms: string[] = ["товар", "товара", "товаров"];

    const formattedProductsCount: string = getFormatProductCounts(
        productsCount,
        wordForms
    );

    return (
        <div className="cart-page-header">
            <div className="cart-page-header-content">
                <h1 className="cart-page-title-primary headline-2-text">
                    Корзина
                    <span className="cart-page-title-secondary badge-text">
                        {formattedProductsCount}
                    </span>
                </h1>
                <StyledButton
                    label="Очистить корзину"
                    onClick={handleClearCart}
                    type="reset"
                    disabled={productsCount === 0}
                />
            </div>
        </div>
    );
};

export default CartPageHeader;
