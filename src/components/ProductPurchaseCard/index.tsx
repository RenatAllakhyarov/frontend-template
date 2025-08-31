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

    const [buyButtonMessage, setBuyButtonMessage] = useState<string>("Add to cart");

    const [buyButtonColor, setBuyButtonColor] = useState<string>("grey");

    const handleAddProductToCart = () => {
        setCountProduct(prevCount => prevCount + 1);

        dispatch(addProductToCart(product));

        return;
    }

    const handleAddToCartOrNavigate = () => {
        if(countProduct <= 0) {
            handleAddProductToCart();

            setBuyButtonMessage("Go to cart");

            setBuyButtonColor("green");

            return;
        }
        
        redirect("/cart");
    }

    return(
        <div className="price-and-buy-button-container">
            <div>Price: {product.price}</div>

            <button
                className="buy-button"
                style={{background: `${buyButtonColor}`}}
                onClick={handleAddToCartOrNavigate}
            >
                {buyButtonMessage}
            </button>
        </div>
    )
}

export default ProductPurchaseCard;