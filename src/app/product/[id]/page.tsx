"use client";

import ProductInfoPage from "@components/ProductInfoPage";
import ProtectedRoute from "@components/ProtectedRoute";

const ProductPage = () => {
    return (
        <ProtectedRoute>
            <ProductInfoPage />
        </ProtectedRoute>
    );
};

export default ProductPage;
