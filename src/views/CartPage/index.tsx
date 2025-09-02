import CartPageHead from "@components/CartPageHead";
import { ReactElement } from "react";
import "./style.css";

const CartPage = (): ReactElement => {
    return (
        <div className="cart-page">
            <CartPageHead />
        </div>
    );
};

export default CartPage;
