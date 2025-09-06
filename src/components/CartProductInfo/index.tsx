import Price from "@components/Price";
import ProductDetails, { IProductDetail } from "@components/ProductDetails";
import { ICartProduct } from "@domains/cart";
import { ReactElement } from "react";
import "./style.css";

export interface ICartProductInfoProps {
    product: ICartProduct;
}

const CartProductInfo = ({ product }: ICartProductInfoProps): ReactElement => {
    const details: IProductDetail[] = [
        { title: "Название", value: product.title },
        { title: "Автор", value: product.publisher },
        { title: "Вес", value: `${product.weight} г` },
    ];

    const isWithoutTitle = true;

    return (
        <div className="cart-product-info">
            <ProductDetails details={details} isWithoutTitle={isWithoutTitle} />

            <div className="product-price headline-4-text">
                <Price
                    price={product.price * product.quantity}
                    discount={product.discount}
                />
            </div>
        </div>
    );
};

export default CartProductInfo;
