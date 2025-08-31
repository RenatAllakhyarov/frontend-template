import { ICON_SRC_PREFIX, ICON_SRC_SUFFIX, IconIds } from "@utils/constants";
import { addProductToCart } from "@store/slices/Cart";
import { IProduct } from "src/domains/product";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './style.css'

interface IProductInfo {
    product: IProduct
}

const ProductInfo = ({
    product
}: IProductInfo) => {
    const dispatch = useDispatch()
    
    const [countProduct, setCountProduct] = useState(0);

    const [buyButtonMessage, setBuyButtonMessage] = useState<string>("Add to cart");

    const handleAddProductToCart = () => {
        setCountProduct(prevCount => prevCount + 1);

        dispatch(addProductToCart(product));

        return;
    }

    const isProductAdded = () => {
        if(!(countProduct > 0)) {
            handleAddProductToCart();

            setBuyButtonMessage("Go to cart");

            return;
        }
        
        redirect("/cart");
    }

    return(
        <div className="product-info-container">
            <img
                className="preview-icon"
                src={ICON_SRC_PREFIX+IconIds.BOOK+ICON_SRC_SUFFIX}
            />

            <div className="product-description">{product.description}</div>
            <div className="other-product-info-headlines-container">
                <div>Tittle:</div>
                <div>Author:</div>
                <div>Stock:</div>
                <div>Created at:</div>
            </div>
            <div className="other-product-info-values-container">
                <div>{product.title}</div>
                <div>{product.author}</div>
                <div>{product.stock}</div>
                <div>{product.createdAt}</div>
            </div>
            <div className="price-and-buy-button-container">
                <div>Price: {product.price}</div>

                <button
                    className="buy-button"
                    onClick={isProductAdded}
                >
                    {buyButtonMessage}
                </button>
            </div>
        </div>
    )
}

export default ProductInfo;