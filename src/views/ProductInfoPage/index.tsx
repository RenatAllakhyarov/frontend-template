import Link from "next/link";
import Label from "@components/Label";
import Indicator from "@components/Indicator";
import IconButton from "@components/IconButton";
import ProductInfo from "@components/ProductInfo";
import ComplexRatingLine from "@components/ComplexRatingLine";
import salesCountIconSrc from "@public/icons/salesCountIcon.svg";
import ProductPurchaseCard from "@components/ProductPurchaseCard";
import reviewsLinkIconSrc from "@public/icons/reviewsLinkIcon.svg";
import { IndicatorColorTypes } from "@components/Indicator";
import { IconButtonTypes } from "@components/IconButton";
import { redirect, useParams } from "next/navigation";
import { IProduct } from "src/domains/product";
import { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import { ReactElement } from "react";
import {
    getFormatBuyCount,
    getFormatProductCounts,
    scrollToElementById,
} from "@utils/constants";
import "./style.css";

export interface IProductInfo {
    product: IProduct;
}

export const REVIEWS_WRAPPER_ID: string = "reviewsWrapper";

const ProductInfoPage = (): ReactElement => {
    const products = useSelector((state: TRootState) => state.market.products);

    const params = useParams<{ id: string }>();

    const { id: currentIdProduct } = params;

    const product = products.find((item) => item.id === currentIdProduct);

    if (!product) {
        console.error("Product not found");

        redirect("/market");
    }

    const wordForms = ["отзыв", "отзыва", "отзывов"];

    const formatReviewsCount: string = getFormatProductCounts(
        product.reviews.length,
        wordForms
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
                    type={IconButtonTypes.LINK}
                />

                <Label label={formatBuyCount} src={salesCountIconSrc} />
            </div>
            <div className="product-info-page-main-content">
                <div className="info-section">
                    <ProductInfo product={product} />
                </div>
                <div className="purchase-section">
                    <ProductPurchaseCard product={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductInfoPage;
