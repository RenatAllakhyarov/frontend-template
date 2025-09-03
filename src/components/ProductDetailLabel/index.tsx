import Link from "next/link";
import { IProductDetail } from "@components/ProductDetails";
import { ReactElement } from "react";
import "./style.css";

export interface IProductDetailLabelProps {
    detailData: IProductDetail;
    isWithoutTitle?: boolean;
}

const ProductDetailLabel = ({
    detailData,
    isWithoutTitle = false,
}: IProductDetailLabelProps): ReactElement => {
    let valueElement: ReactElement = <span>{detailData.value}</span>;

    if (detailData.isLink) {
        valueElement = (
            <Link href={`${detailData.link!}/${detailData.value}`}>
                {detailData.value}
            </Link>
        );
    }

    return (
        <div className="detail-wrapper body-small-text">
            {!isWithoutTitle && (
                <span className="title">{detailData.title}</span>
            )}
            <div className="value">{valueElement}</div>
        </div>
    );
};

export default ProductDetailLabel;
