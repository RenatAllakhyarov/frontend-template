import likeIcon from "@public/icons/likeIcon.svg";
import dislikeIcon from "@public/icons/dislikeIcon.svg";
import IconButton, { IconButtonTypes } from "@components/IconButton";
import { ReactElement } from "react";
import "./style.css";
import { ICartProduct } from "@domains/cart";

interface IProductCounterProps {
    productId: string;
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    product?: ICartProduct
}

const ProductCounter = ({
    productId,
    quantity,
    onDecrease,
    onIncrease,
    product
}: IProductCounterProps): ReactElement => {

    return (
        <div className="product-counter">
            <IconButton
                src={dislikeIcon}
                alt="minus icon"
                onClick={onDecrease}
                type={IconButtonTypes.GHOST}
                iconSize={16}
                className="counter-minus-button"
            />

            <span className="counter-quantity">{product? product.quantity : quantity}</span>

            <IconButton
                src={likeIcon}
                alt="plus icon"
                onClick={onIncrease}
                type={IconButtonTypes.GHOST}
                iconSize={16}
                className="counter-plus-button"
            />
        </div>
    );
};

export default ProductCounter;
