import plusIconSrc from "@public/icons/plusIcon.svg";
import minusIconSrc from "@public/icons/minusIcon.svg";
import IconButton, { IconButtonTypes } from "@components/IconButton";
import { ReactElement } from "react";
import "./style.css";

interface IProductCounterProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const ProductCounter = ({
    quantity,
    onDecrease,
    onIncrease,
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
            <span className="counter-quantity primary-text">
                {quantity}
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
