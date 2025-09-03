import StyledButton from "@components/StyledButton";
import { IProductInfo } from "@views/ProductInfoPage";
import { addProductToCart } from "@store/slices/Cart";
import { CSSProperties, useState } from "react";
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

    return (
        <div className="price-and-buy-button-container">
            <div>Price: {product.price}</div>

            <StyledButton
                label={`${buyButtonMessage}`}
                onClick={handleAddToCartOrNavigate}
                style={DEFAULT_BUTTON_STYLES}
                isCompleted={isAddedToCart}
            />
        </div>
    );
};

export default ProductPurchaseCard;
