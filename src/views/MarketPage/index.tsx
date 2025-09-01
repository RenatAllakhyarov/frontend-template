"use client";

import ProductsList from "@components/ProductList";
import { fetchProducts } from "@store/slices/Market/thunks";
import { TAppDispatch, TRootState } from "@store/index";
import { useDispatch, useSelector } from "react-redux";
import { ReactElement, useEffect } from "react";
import "./style.css";

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

    content = <ProductsList products={products} />;

    return (
        <div className="market-page">
            <div className="badge badge-text">{"Книги"}</div>
            <h1 className="headline-1-text">{`Книги`}</h1>

            {content}
        </div>
    );
};

export default MarketPage;
