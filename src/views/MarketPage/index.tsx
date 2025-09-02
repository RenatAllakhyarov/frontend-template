import API from "@api/index";
import ProductsList from "@components/ProductList";
import { ReactElement } from "react";

const MarketPage = async (): Promise<ReactElement> => {
    const products = await API.getProducts();

    return (
        <div className="market-page">
            <div className="badge badge-text">{"Книги"}</div>
            <h1 className="headline-1-text">{`Книги`}</h1>

            <ProductsList products={products} />
        </div>
    );
};

export default MarketPage;
