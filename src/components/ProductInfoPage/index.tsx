import ProductInfo from "@components/ProductInfo";
import ProductPurchaseCard from "@components/ProductPurchaseCard";
import { IProduct } from "src/domains/product";
import './style.css'

export interface IProductInfo {
    product: IProduct
}

const ProductInfoPage = ({
    product
}: IProductInfo) => {
    return(
        <div className="product-info-container">
            <ProductInfo product={product}/>
            
            <ProductPurchaseCard product={product}/>
        </div>
    )
}

export default ProductInfoPage;