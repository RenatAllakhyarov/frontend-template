import MarketPage from "@views/MarketPage";
import ProtectedRoute from "@components/ProtectedRoute";
import { ReactElement } from "react";

const Market = (): ReactElement => {
    return (
        // <ProtectedRoute>
            <MarketPage />
        // </ProtectedRoute>
    );
};
export default Market;
