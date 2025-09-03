import ImageWrapper from "@components/ImageWrapper";
import CartProductInfo from "@components/CartProductInfo";
import CartProductCardBar from "@components/CartProductCardBar";
import { ICartProduct } from "@domains/cart";
import { ReactElement } from "react";
import "./style.css";

interface ICartProductCardProps {
    product: ICartProduct;
}

const CartProductCard = ({ product }: ICartProductCardProps): ReactElement => {
    return (
        <div className="cart-product-card">
            <div className="cart-product-image">
                <ImageWrapper
                    src={product.imagesUrls[0]}
                    alt={product.title}
                    width={120}
                    height={100}
                />
            </div>

            <div className="cart-product-details">
                <CartProductInfo product={product} />
                <CartProductCardBar
                    productId={product.id}
                    quantity={product.quantity}
                />
            </div>
        </div>
    );
};

export default CartProductCard;
