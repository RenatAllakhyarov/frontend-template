import plusIconSrc from "@public/icons/plusIcon.svg";
import minusIconSrc from "@public/icons/minusIcon.svg";
import IconButton, { IconButtonTypes } from "@components/IconButton";
import { ICartProduct } from "@domains/cart";
import { ReactElement } from "react";
import "./style.css";

interface IProductCounterProps {
    productId: string;
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    product?: ICartProduct;
}

const ProductCounter = ({
    productId,
    quantity,
    onDecrease,
    onIncrease,
    product,
}: IProductCounterProps): ReactElement => {
    return (
        <div className="product-counter">
            <IconButton
                src={minusIconSrc}
                alt="minus icon"
                onClick={onDecrease}
                type={IconButtonTypes.GHOST}
                iconSize={16}
                className="counter-minus-button"
            />
            <span className="counter-quantity">
                {product ? product.quantity : quantity}
            </span>
            <IconButton
                src={plusIconSrc}
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
