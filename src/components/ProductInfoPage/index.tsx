import ProductInfo from "@components/ProductInfo";
import ProductPurchaseCard from "@components/ProductPurchaseCard";
import { IProduct } from "src/domains/product";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import './style.css'

export interface IProductInfo {
    product: IProduct
}

const ProductInfoPage = () => {  
    const products = useSelector((state: TRootState) => state.market.products);

    const params = useParams<{ id: string }>();
    
    const { id: currentIdProduct } = params;
    
    const product = products.find(item => item.id === currentIdProduct);

    if(!product) { return <div>Product not found</div> }

    return(
        <div className="product-info-container">
            <ProductInfo product={product}/>
            
            <ProductPurchaseCard product={product}/>
        </div>
    )
}

export default ProductInfoPage;