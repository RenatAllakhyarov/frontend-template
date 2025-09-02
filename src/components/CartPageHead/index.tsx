"use client";

import StyledButton, { StyledButtonTypes } from "@components/StyledButton";
import { getFormatProductsCount } from "@utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@store/slices/Cart";
import { TRootState } from "@store/index";
import { ReactElement } from "react";
import "./style.css";

const CartPageHead = (): ReactElement => {
    const dispatch = useDispatch();

    const cart = useSelector((state: TRootState) => state.cart.cart);

    const productsCount = cart.getProductsCount();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const formattedProductsCount: string = getFormatProductsCount(productsCount);

    return (
        <div className="cart-page-head">
            <div className="cart-info">
                <h1 className="headline-2-text">Корзина</h1>
                <span className="badge-text">{formattedProductsCount}</span>
            </div>
            <StyledButton
                label="Очистить корзину"
                onClick={handleClearCart}
                type={StyledButtonTypes.SECONDARY}
                disabled={productsCount === 0}
            />
        </div>
    );
};

export default CartPageHead;