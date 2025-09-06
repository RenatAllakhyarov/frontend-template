import trashIconSrc from "@public/icons/trashIcon.svg";
import ProductCounter from "@components/ProductCounter";
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

    const handleIncreaseQuantity = (): void => {
        dispatch(increaseProductQuantity(productId));
    };

    const handleDecreaseQuantity = (): void => {
        dispatch(decreaseProductQuantity(productId));
    };

    const handleRemoveProduct = (): void => {
        dispatch(removeProductFromCart(productId));
    };

    return (
        <div className="cart-product-card-bar">
            <ProductCounter
                quantity={quantity}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
            />
            <IconButton
                src={trashIconSrc}
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
