import ProductDetailLabel from "@components/ProductDetailLabel";
import { ReactElement } from "react";
import "./style.css";

export interface IProductDetail {
    title: string;
    value: string;
    isLink?: boolean;
    link?: string;
}

export interface IProductDetailsProps {
    details: IProductDetail[];
    isWithoutTitle?: boolean;
}

const ProductDetails = ({
    details,
    isWithoutTitle = false,
}: IProductDetailsProps): ReactElement => {
    return (
        <div className="product-details">
            {details.map((detailData: IProductDetail, index: number) => (
                <ProductDetailLabel
                    key={index}
                    detailData={detailData}
                    isWithoutTitle={isWithoutTitle}
                />
            ))}
        </div>
    );
};

export default ProductDetails;
