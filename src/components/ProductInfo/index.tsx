import StyledButton from "@components/StyledButton";
import { IMockDataProps } from "@app/product/[id]/page";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@store/slices/Cart";
import { selectCartItems } from "@store/slices/Cart";
import { Fragment } from "react";

interface IProductInfo {
    product: IMockDataProps
}

const ProductInfo = ({
    product
}: IProductInfo) => {
    const dispatch = useDispatch()
    
    const cartItems = useSelector(selectCartItems);

    const handleAddProductToCart = () => {
        dispatch(addProductToCart(product));
    }

    const handleCartProducts = () => {
        console.log(cartItems);
    }

    return(
        <Fragment>
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.author}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.stock}</div>
            <div>{product.createdAt}</div>

            <StyledButton
                label="Add"
                onClick={handleAddProductToCart}
            />
            <StyledButton
                label="Cart"
                onClick={handleCartProducts}
            />
        </Fragment>
    )
}

export default ProductInfo;