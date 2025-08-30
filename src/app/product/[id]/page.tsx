"use client";

import ProductInfo from "@components/ProductInfo";
import { products } from "@store/slices/Cart";
import { useParams } from "next/navigation";

const ProductPage = () => {
    const params = useParams<{ id: string }>();
    
    const { id: currentIdProduct } = params;
    
    const product = products.find(item => item.id === currentIdProduct);

    if(!product) { return; }

    return <ProductInfo product={product}/>;
}

export default ProductPage;
