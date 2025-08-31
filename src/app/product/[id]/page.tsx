"use client";

import ProductInfoPage from "@components/ProductInfoPage";
import { products } from "@store/slices/Cart";
import { useParams } from "next/navigation";

const ProductPage = () => {
    const params = useParams<{ id: string }>();
    
    const { id: currentIdProduct } = params;
    
    const product = products.find(item => item.id === currentIdProduct);

    if(!product) { return; }

    return <ProductInfoPage product={product}/>;
}

export default ProductPage;
