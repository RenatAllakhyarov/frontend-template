"use client";

import ProductsList from "@components/ProductList";
import { fetchProducts } from "@store/slices/Market/thunks";
import { TAppDispatch, TRootState } from "@store/index";
import { useDispatch, useSelector } from "react-redux";
import { ReactElement, useEffect } from "react";

const MarketPage = (): ReactElement => {
    const dispatch = useDispatch<TAppDispatch>();

    const { products, isLoading, error } = useSelector(
        (state: TRootState) => state.market
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <div>Загрузка продуктов...</div>;
    }

    if (error) {
        content = <div>Ошибка: {error}</div>;
    }

    if (products.length > 0) {
        content = <ProductsList products={products} />;
    }

    return (
        <div>
            <h1>Каталог товаров</h1>

            {content}
        </div>
    );
};

export default MarketPage;