import ProductCard from "@components/ProductCard";
import { IProduct } from "@domains/product";
import { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import { ReactElement } from "react";
import "./style.css";

interface IPublisherPageProps {
    publisher: string;
}

const PublisherPage = ({ publisher }: IPublisherPageProps): ReactElement => {
    const { products } = useSelector((state: TRootState) => state.market);

    const publisherProducts: IProduct[] = products.filter(
        (product) => product.publisher === publisher
    );

    return (
        <div className="publisher-page">
            <h1 className="publisher-header">{`Книги издателя: ${publisher}`}</h1>
            <div className="publisher-list">
                {publisherProducts.map(
                    (product: IProduct): ReactElement => (
                        <ProductCard key={product.id} product={product} />
                    )
                )}
            </div>
        </div>
    );
};

export default PublisherPage;
