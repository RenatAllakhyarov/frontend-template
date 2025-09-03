import Price from "@components/Price";
import { ICartProduct } from "@domains/cart";
import { ReactElement } from "react";
import "./style.css";

export interface ICartProductInfoProps {
    product: ICartProduct;
}

const CartProductInfo = ({ product }: ICartProductInfoProps): ReactElement => {
    return (
        <div className="cart-product-info">
            <span className="product-title">{product.title}</span>
            <span className="product-author">{product.publisher}</span>
            <span className="product-weight">{product.weight}</span>
            <span className="product-price">
                <Price
                    price={product.price * product.quantity}
                    discount={product.discount}
                />
            </span>
        </div>
    );
};

export default CartProductInfo;
