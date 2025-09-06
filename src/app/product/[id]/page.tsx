"use client";

import ProtectedRoute from "@components/ProtectedRoute";
import ProductInfoPage from "@views/ProductInfoPage";

const ProductPage = () => {
    return (
        // <ProtectedRoute>
            <ProductInfoPage />
        // </ProtectedRoute>
    );
};

export default ProductPage;
