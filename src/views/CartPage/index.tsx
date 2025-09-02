import CartPageHead from "@components/CartPageHead";
import { ReactElement } from "react";
import "./style.css";

const CartPage = (): ReactElement => {
    return (
        <div className="cart-page">
            <CartPageHead />
            <div className="cart-page-content">
                <div className="cart-page-content-left"></div>
                <div className="cart-page-content-right"></div>
            </div>
        </div>
    );
};

export default CartPage;
