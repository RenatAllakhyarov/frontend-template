import ProductInfoPage from "@views/ProductInfoPage";
import ProtectedRoute from "@components/ProtectedRoute";

const ProductPage = () => {
    return (
        <ProtectedRoute>
            <ProductInfoPage />
        </ProtectedRoute>
    );
};

export default ProductPage;
