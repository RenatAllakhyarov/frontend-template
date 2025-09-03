"use client";

<<<<<<< HEAD
import ProductInfoPage from "@views/ProductInfoPage";
=======
>>>>>>> development
import ProtectedRoute from "@components/ProtectedRoute";
import ProductInfoPage from "@views/ProductInfoPage";

const ProductPage = () => {
    return (
        <ProtectedRoute>
            <ProductInfoPage />
        </ProtectedRoute>
    );
};

export default ProductPage;
