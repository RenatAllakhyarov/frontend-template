import CartProductCard from "@components/CartProductCard";
import { ICartProduct } from "@domains/cart";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import { ReactElement } from "react";
import "./style.css";

const CartProductList = (): ReactElement => {
    const cartProducts: ICartProduct[] = useSelector((state: TRootState) =>
        state.cart.cart.getProducts()
    );

    return (
        <div className="cart-product-list">
            {cartProducts.length === 0 && (
                <p className="empty-cart">Ваша корзина пуста</p>
            )}

            {cartProducts.length > 0 && (
                <div className="product-cards-wrapper">
                    {cartProducts.map((product: ICartProduct) => (
                        <CartProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};   

export default CartProductList;
