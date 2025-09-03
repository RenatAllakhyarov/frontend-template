import ProductCounter from "@components/ProductCounter";
import salesCountIcon from "@public/icons/salesCountIcon.svg";
import IconButton, { IconButtonTypes } from "@components/IconButton";
import { useDispatch } from "react-redux";
import { ReactElement } from "react";
import {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
} from "@store/slices/Cart";
import "./style.css";

export interface ICartProductCardBarProps {
    productId: string;
    quantity: number;
}

const CartProductCardBar = ({
    productId,
    quantity,
}: ICartProductCardBarProps): ReactElement => {
    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(increaseProductQuantity(productId));
        console.log("Items quantity increase");
    };

    const handleDecreaseQuantity = () => {
        dispatch(decreaseProductQuantity(productId));
        console.log("Items quantity decrease");
    };

    const handleRemoveProduct = () => {
        dispatch(removeProductFromCart(productId));
        console.log("Item removed")
    };

    return (
        <div className="cart-product-card-bar">
            <ProductCounter
                productId={productId}
                quantity={quantity}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
            />

            <IconButton
                src={salesCountIcon}
                alt="remove product from cart"
                onClick={handleRemoveProduct}
                type={IconButtonTypes.GHOST}
                iconSize={16}
                className="remove-button"
            />
        </div>
    );
};

export default CartProductCardBar;
