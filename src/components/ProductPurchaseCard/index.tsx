import IconButton from "@components/IconButton";
import { IProductInfo } from "@components/ProductInfoPage";
import { addProductToCart } from "@store/slices/Cart";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './style.css'
import StyledButton from "@components/StyledButton";

const ProductPurchaseCard = ({
    product
}: IProductInfo) => {
    const dispatch = useDispatch()
    
    const [countProduct, setCountProduct] = useState(0);

    const [buyButtonMessage, setBuyButtonMessage] = useState<string>("Add to cart");

    const [buyButtonClassName, setBuyButtonClassName] = useState<string>("add-to-cart")

    const handleAddProductToCart = () => {
        setCountProduct(prevCount => prevCount + 1);

        dispatch(addProductToCart(product));

        return;
    }

    const handleAddToCartOrNavigate = () => {
        if(countProduct <= 0) {
            handleAddProductToCart();

            setBuyButtonMessage("Go to cart");

            setBuyButtonClassName("go-to-cart");

            return;
        }
        
        redirect("/cart");
    }

    return(
        <div className="price-and-buy-button-container">
            <div>Price: {product.price}</div>

            <StyledButton
                label={`${buyButtonMessage}`}
                onClick={handleAddToCartOrNavigate}
                className={buyButtonClassName}
            />
        </div>
    )
}

export default ProductPurchaseCard;