import { ICON_PREFIX, IconIds } from "@utils/constants";
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

    const handleAddProductToCart = () => {
        setCountProduct(prevCount => prevCount + 1);

        dispatch(addProductToCart(product));
    }

    return(
        <div className="product-info-container">
            <img
                className="preview-icon"
                src={ICON_PREFIX+IconIds.BOOK}
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

                {countProduct > 0 ? (
                    <button
                        className="buy-button"
                        onClick={() => redirect('/cart')}
                    >
                        Go to cart
                    </button>
                ) : (
                    <button
                        className="buy-button"
                        onClick={handleAddProductToCart}
                    >
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProductInfo;