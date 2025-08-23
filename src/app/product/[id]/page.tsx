"use client";

import ProtectedRoute from "@components/ProtectedRoute";
import { useParams } from "next/navigation";

const ProductPage = () => {
    const params = useParams<{ id: string }>();

    const { id: currentIdProduct } = params;

    return (
        <ProtectedRoute>
            <div>Product page for product by id: {currentIdProduct}</div>
        </ProtectedRoute>
    );
};

export default ProductPage;
