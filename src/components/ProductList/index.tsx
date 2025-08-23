import ProductCard from "@components/ProductCard";
import { IProduct } from "@domains/Product";
import { ReactElement } from "react";
import "./style.css";

interface IProductListProps {
    products: IProduct[];
}

const ProductList = ({ products }: IProductListProps): ReactElement => {
    if (!products.length) {
        return <div>Products not founded...</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
