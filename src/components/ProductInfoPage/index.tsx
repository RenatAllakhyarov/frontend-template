import ProductInfo from "@components/ProductInfo";
import ProductPurchaseCard from "@components/ProductPurchaseCard";
import { IProduct } from "src/domains/product";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import "./style.css";
import Indicator, { IndicatorColorTypes } from "@components/Indicator";

export interface IProductInfo {
    product: IProduct;
}

const ProductInfoPage = () => {
    const products = useSelector((state: TRootState) => state.market.products);

    const params = useParams<{ id: string }>();

    const { id: currentIdProduct } = params;

    const product = products.find((item) => item.id === currentIdProduct);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-info-page">
            <div className="header">
                <h1 className="headline-2-text">{product.title}</h1>
                <Indicator
                    colorType={IndicatorColorTypes.SECONDARY}
                    label={product.ageRating}
                    isCircle
                />
            </div>

            <ProductInfo product={product} />

            {/* <ProductPurchaseCard product={product} /> */}
        </div>
    );
};

export default ProductInfoPage;
