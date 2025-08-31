import StyledButton from "@components/StyledButton";
import { IProductInfo } from "@components/ProductInfoPage";
import { addProductToCart } from "@store/slices/Cart";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './style.css'

const ProductPurchaseCard = ({
    product
}: IProductInfo) => {
    const dispatch = useDispatch()
    
    const [countProduct, setCountProduct] = useState(0);

    const handleAddProductToCart = () => {
        setCountProduct(prevCount => prevCount + 1);

        dispatch(addProductToCart(product));

        return;
    }

    const handleAddToCartOrNavigate = () => {
        if(countProduct <= 0) {
            handleAddProductToCart();

            return;
        }
        
        redirect("/cart");
    }

    const buyButtonMessage = countProduct <= 0 ? ("Add to cart") : ("Go to cart");

    const buyButtonClassName = countProduct <= 0 ? ("add-to-cart") : ("go-to-cart");

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