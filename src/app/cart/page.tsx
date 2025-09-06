import CartPage from "@views/CartPage";
import ProtectedRoute from "@components/ProtectedRoute";
import { ReactElement } from "react";

const Cart = (): ReactElement => {
    return (
        // <ProtectedRoute>
            <CartPage />
        // </ProtectedRoute>
    );
};

export default Cart;
