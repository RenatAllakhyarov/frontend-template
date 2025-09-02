import Link from "next/link";
import Label from "@components/Label";
import Indicator from "@components/Indicator";
import IconButton from "@components/IconButton";
import ProductInfo from "@components/ProductInfo";
import ComplexRatingLine from "@components/ComplexRatingLine";
import salesCountIconSrc from "@public/icons/salesCountIcon.svg";
import reviewsLinkIconSrc from "@public/icons/reviewsLinkIcon.svg";
import { IndicatorColorTypes } from "@components/Indicator";
import { redirect, useParams } from "next/navigation";
import { IProduct } from "src/domains/product";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import { ReactElement } from "react";
import {
    getFormatBuyCount,
    getFormatReviewsCount,
    scrollToElementById,
} from "@utils/constants";
import "./style.css";

export interface IProductInfo {
    product: IProduct;
}

const REVIEWS_WRAPPER_ID: string = "reviewsWrapper";

const ProductInfoPage = (): ReactElement => {
    const products = useSelector((state: TRootState) => state.market.products);

    const params = useParams<{ id: string }>();

    const { id: currentIdProduct } = params;

    const product = products.find((item) => item.id === currentIdProduct);

    if (!product) {
        console.error("Product not found");

        redirect("/market");
    }

    const formatReviewsCount: string = getFormatReviewsCount(
        product.reviews.length
    );
    const formatBuyCount: string = getFormatBuyCount(product.salesCount);

    return (
        <div className="product-info-page">
            <div className="badge badge-text">{"Книги"}</div>
            <div className="name-header">
                <h1 className="headline-3-text">{product.title}</h1>
                <Indicator
                    colorType={IndicatorColorTypes.SECONDARY}
                    label={product.ageRating}
                    isCircle
                />
            </div>
            <div className="publisher-link-wrapper">
                <Link href={`/publisher/${product.publisher}`}>
                    {product.publisher}
                </Link>
            </div>
            <div className="feedback-block">
                <ComplexRatingLine
                    rating={product.averageRating}
                    ratingsCount={product.ratingsCount}
                />

                <IconButton
                    src={reviewsLinkIconSrc}
                    label={formatReviewsCount}
                    alt="reviews link icon"
                    onClick={() => scrollToElementById(REVIEWS_WRAPPER_ID)}
                />

                <Label label={formatBuyCount} src={salesCountIconSrc} />
            </div>

            <ProductInfo product={product} />
            {/* <ProductPurchaseCard product={product} /> */}
        </div>
    );
};

export default ProductInfoPage;
