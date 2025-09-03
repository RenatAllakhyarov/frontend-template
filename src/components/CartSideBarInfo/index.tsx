"use client";

import { ICartProduct } from "@domains/cart";
import { CURRENCY } from "@utils/constants";
import { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import { ReactElement } from "react";
import "./style.css";

const CartSideBarInfo = (): ReactElement => {
    const cartProducts: ICartProduct[] = useSelector((state: TRootState) =>
        state.cart.cart.getProducts()
    );

    const productsCount: number = useSelector((state: TRootState) =>
        state.cart.cart.getProductsCount()
    );

    const calculateTotalPrice = (): number => {
        return cartProducts.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    };

    const calculateTotalDiscount = (): number => {
        return cartProducts.reduce((total, product) => {
            const productOriginalPrice = product.price * product.quantity;

            const discountAmount =
                productOriginalPrice * (product.discount / 100);

            return total + discountAmount;
        }, 0);
    };

    const totalPrice: number = calculateTotalPrice();
    const totalDiscount: number = calculateTotalDiscount();
    const finalPrice: number = totalPrice - totalDiscount;

    return (
        <div className="cart-side-bar-info">
            <div className="info-row">
                <span className="info-label body-text">Кол-во товаров:</span>
                <span className="info-value primary-text">{productsCount}</span>
            </div>
            <div className="info-row">
                <span className="info-label body-text">Скидка:</span>
                <span className="info-value discount-value primary-text">{`- ${totalDiscount.toFixed(
                    2
                )}${CURRENCY}`}</span>
            </div>
            <div className="info-row total-row">
                <span className="info-label headline-4-text">Итого</span>
                <span className="info-value headline-4-text">
                    {`${finalPrice.toFixed(2)}${CURRENCY}`}
                </span>
            </div>
        </div>
    );
};

export default CartSideBarInfo;
