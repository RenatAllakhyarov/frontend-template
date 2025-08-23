import Link from "next/link";
import { ICON_SRC_PREFIX, ICON_SRC_SUFFIX, IconIds } from "@utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@store/slices/Cart";
import { selectCartItems } from "@store/slices/Cart";
import { IProduct } from "src/domains/product";
import { Fragment, useState } from "react";
import './style.css'

interface IProductInfo {
    product: IProduct
}

const ProductInfo = ({
    product
}: IProductInfo) => {
    const dispatch = useDispatch()
    
    const [countProduct, setCountProduct] = useState(0);

    const cartItems = useSelector(selectCartItems);

    const handleAddProductToCart = () => {
        setCountProduct(prevCount => prevCount + 1);
        dispatch(addProductToCart(product));
    }

    const handleCartProducts = () => {
        console.log(cartItems);
    }

    return(
        <Fragment>
            <div className="header">

            </div>
            <div className="product-info-container">
                <Link href="/cart">
                    <button
                        className="cart-button"
                        onClick={handleCartProducts}
                    >
                        Cart
                    </button>
                </Link>

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
                        onClick={handleAddProductToCart}
                    >
                        {countProduct === 0 ? 'Add to cart' : `Buy ${countProduct}`}
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductInfo;