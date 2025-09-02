import ProductListSkeleton from "@components/ProductListSkeleton";
import { ReactElement } from "react";

const Loading = (): ReactElement => {
    return (
        <div>
            <h1>Каталог товаров</h1>

            <ProductListSkeleton />
        </div>
    );
};

export default Loading;