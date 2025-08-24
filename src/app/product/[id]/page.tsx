"use client";

import { useParams } from "next/navigation";

const ProductPage = () => {
    const params = useParams<{ id: string }>();

    const { id: currentIdProduct } = params;

    return <div>Product page for product by id: {currentIdProduct}</div>;
};

export default ProductPage;
