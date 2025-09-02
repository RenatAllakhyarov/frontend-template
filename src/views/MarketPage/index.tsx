"use client";

// import API from "@api/index";
import ServerError from "@components/ServerError";
import ProductsList from "@components/ProductList";
import ProductListSkeleton from "@components/ProductListSkeleton";
import { fetchProducts } from "@store/slices/Market/thunks";
import { TAppDispatch, TRootState } from "@store/index";
import { useDispatch, useSelector } from "react-redux";
import { ReactElement, useEffect } from "react";
import "./style.css";

const MarketPage = (): ReactElement => {
    const dispatch = useDispatch<TAppDispatch>();

    const { isLoading, products, error } = useSelector(
        (state: TRootState) => state.market
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="market-page">
            <div className="badge badge-text">{"Книги"}</div>
            <h1 className="headline-1-text">{`Книги`}</h1>

            {isLoading && <ProductListSkeleton />}
            {!isLoading && !!error && <ServerError />}
            {!isLoading && !error && <ProductsList products={products} />}
        </div>
    );
};

export default MarketPage;
