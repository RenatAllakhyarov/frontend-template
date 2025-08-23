"use client";

import ProductInfo from "@components/ProductInfo";
import { useParams } from "next/navigation";
import { Fragment } from "react";

export interface IMockDataProps {
    id: string,
    title: string,
    author: string,
    price: number,
    description: string,
    stock: number,
    createdAt: string
}

const products: IMockDataProps[] = [
    {
        id: "1",
        title: "+7952812",
        author: "Alblack",
        price: 52,
        description: "Thats second",
        stock: 52,
        createdAt: "Second book"
    },
    {
        id: "2",
        title: "FREAK LAND",
        author: "5opka",
        price: 42,
        description: "42 BROTHER",
        stock: 42,
        createdAt: "2017" 
    }
]

const ProductPage = () => {
    const params = useParams<{ id: string }>();

    const { id: currentIdProduct } = params;

    const product = products[Number(currentIdProduct)-1];

    return(
        <Fragment>
            <div>Product page for product by id: {currentIdProduct}</div>
            
            <ProductInfo
                product={product}
            />
        </Fragment>
    )
}

export default ProductPage;