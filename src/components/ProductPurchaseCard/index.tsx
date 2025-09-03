import Price from "@components/Price";
import Label from "@components/Label";
import StyledButton from "@components/StyledButton";
import crossIconSrc from "@public/icons/crossIcon.svg";
import checkmarkIconSrc from "@public/icons/checkmarkIcon.svg";
import { IProductInfo } from "@views/ProductInfoPage";
import { addProductToCart } from "@store/slices/Cart";
import { CSSProperties, useState } from "react";
import { LabelsTypes } from "@components/Label";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import "./style.css";

const DEFAULT_BUTTON_STYLES: CSSProperties = {
    width: "100%",
    height: "60px",
};

const ProductPurchaseCard = ({ product }: IProductInfo) => {
    const dispatch = useDispatch();

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddProductToCart = () => {
        setIsAddedToCart(true);

        dispatch(addProductToCart(product));

        return;
    };

    const handleAddToCartOrNavigate = () => {
        if (!isAddedToCart) {
            handleAddProductToCart();

            return;
        }

        redirect("/cart");
    };

    const buyButtonMessage = !isAddedToCart ? "Add to cart" : "Go to cart";
    const availableLabelIconSrc: string = !product.isAvailable
        ? crossIconSrc
        : checkmarkIconSrc;
    const availableLabel: string = !product.isAvailable
        ? "Нет в наличии"
        : "В наличии";
    const availableLabelType: LabelsTypes = !product.isAvailable
        ? LabelsTypes.NEGATIVE
        : LabelsTypes.SUCCESS;

    return (
        <div className="price-and-buy-button-container">
            <Price
                price={product.price}
                discount={product.discount}
                fontSize={16}
            />
            <StyledButton
                label={`${buyButtonMessage}`}
                onClick={handleAddToCartOrNavigate}
                style={DEFAULT_BUTTON_STYLES}
                isCompleted={isAddedToCart}
                disabled={!product.isAvailable}
            />
            <Label
                label={availableLabel}
                src={availableLabelIconSrc}
                type={availableLabelType}
            />
        </div>
    );
};

export default ProductPurchaseCard;
