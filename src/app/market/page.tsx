"use client";

import ProductsList from "@components/ProductList";
import { TAppDispatch, TRootState } from "@store/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@store/slices/Market";
import { ReactElement, useEffect } from "react";

const MarketPage = (): ReactElement => {
    const dispatch = useDispatch<TAppDispatch>();

    const { products, status, error } = useSelector(
        (state: TRootState) => state.market
    );

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    let content;

    if (status === "loading") {
        content = <div>Загрузка продуктов...</div>;
    };

    if (status === "succeeded") {
        content = <ProductsList products={products} />;
    };

    if (status === "failed") {
        content = <div>Ошибка: {error}</div>;
    };

    return (
        <div>
            <h1>Каталог товаров</h1>

            {content}
        </div>
    );
};

export default MarketPage;
