import { ReactElement } from "react";
import "./style.css";

interface ProductCardSkeletonProps {
    width: string | number;
    height: string | number;
}

const ProductCardSkeleton = ({
    width,
    height,
}: ProductCardSkeletonProps): ReactElement => {
    return (
        <div className="product-cart-skeleton" style={{ width, height }}>
            <div className="product-skeleton-image"></div>
            <div className="product-skeleton-info">
                <div className="product-skeleton-price"></div>
                <div className="product-skeleton-title"></div>
                <div className="product-skeleton-author"></div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
