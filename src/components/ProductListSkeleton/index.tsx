import ProductCardSkeleton from "@components/ProductCardSkeleton";
import { ReactElement } from "react";
import "./style.css";

const DEFAULT_PRODUCTS_COUNT = 9;
const WIDTH = "280px";
const HEIGHT = "309.6px";

interface ProductListSkeletonProps {
    productsCount?: number;
    width?: string;
    height?: string;
}

const ProductListSkeleton = ({
    productsCount = DEFAULT_PRODUCTS_COUNT,
    width = WIDTH,
    height = HEIGHT,
}: ProductListSkeletonProps): ReactElement => {
    return (
        <div className="product-list-skeleton">
            {Array.from({ length: productsCount }).map((_, index) => (
                <ProductCardSkeleton
                    key={index}
                    width={width}
                    height={height}
                />
            ))}
        </div>
    );
};

export default ProductListSkeleton;
