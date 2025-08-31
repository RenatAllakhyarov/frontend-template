import ProductInfo from "@components/ProductInfo";
import ProductPurchaseCard from "@components/ProductPurchaseCard";
import { IProduct } from "src/domains/product";
import { useParams } from "next/navigation";
import './style.css'

export interface IProductInfo {
    product: IProduct
}

const ProductInfoPage = () => {
    const products: IProduct[] = [
        {
            id: "0",
            title: "string",
            author: "string",
            price: 23,
            description: "string",
            stock: 423,
            createdAt: "string"
        }
    ];
    
    const params = useParams<{ id: string }>();
    
    const { id: currentIdProduct } = params;
    
    const product = products.find(item => item.id === currentIdProduct);

    if(!product) { return; }

    return(
        <div className="product-info-container">
            <ProductInfo product={product}/>
            
            <ProductPurchaseCard product={product}/>
        </div>
    )
}

export default ProductInfoPage;