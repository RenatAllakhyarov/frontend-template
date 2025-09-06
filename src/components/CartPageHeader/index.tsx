"use client";

import StyledButton from "@components/StyledButton";
import { getFormatProductCounts } from "@utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@store/slices/Cart";
import { TRootState } from "@store/index";
import { ReactElement } from "react";
import "./style.css";

const CartPageHeader = (): ReactElement => {
    const dispatch = useDispatch();

    const cart = useSelector((state: TRootState) => state.cart.cart);

    const productsCount = cart.getProductsCount();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const formattedProductsCount = getFormatProductCounts(productsCount, [
        "товар",
        "товара",
        "товаров",
    ]);

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
