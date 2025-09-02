import ReviewsList from "@components/ReviewsList";
import TextPreview from "@components/TextPreview";
import StyledButton from "@components/StyledButton";
import ImageSelector from "@components/ImagesSelector";
import ProductDetails from "@components/ProductDetails";
import ComplexRatingBlock from "@components/ComplexRatingBlock";
import ProductDetailsManager from "@services/ProductDetailManager";
import { IProductInfo, REVIEWS_WRAPPER_ID } from "@components/ProductInfoPage";
import { allDetailsConfig, previewDetailsConfig } from "@domains/product";
import { StyledButtonTypes } from "@components/StyledButton";
import { IProductDetail } from "@components/ProductDetails";
import { scrollToElementById } from "@utils/constants";
import "./style.css";

const ANNOTATION_WRAPPER_ID = "annotation";
const FULL_DETAILS_ID = "fullDetails";

const ProductInfo = ({ product }: IProductInfo) => {
    const previewDetails: IProductDetail[] =
        ProductDetailsManager.getDetailsData(product, previewDetailsConfig);
    const allDetails: IProductDetail[] = ProductDetailsManager.getDetailsData(
        product,
        allDetailsConfig
    );

    return (
        <div className="product-info-wrapper">
            <div className="primary-block">
                <div className="images-block">
                    <ImageSelector imagesSrcList={product.imagesUrls} />
                </div>
                <div className="info-block">
                    <div className="text-preview-container">
                        <TextPreview text={product.annotation} />
                    </div>
                    <div className="annotation-scroll-button-wrapper">
                        <StyledButton
                            onClick={() =>
                                scrollToElementById(ANNOTATION_WRAPPER_ID)
                            }
                            label="Перейти к описанию"
                            type={StyledButtonTypes.SECONDARY}
                            className="button-small-text"
                        />
                    </div>
                    <div className="product-details-wrapper">
                        <ProductDetails details={previewDetails} />
                    </div>
                    <StyledButton
                        onClick={() => scrollToElementById(FULL_DETAILS_ID)}
                        label="Перейти к характеристикам"
                        type={StyledButtonTypes.LINK}
                        className="button-small-text"
                    />
                </div>
            </div>
            <div className="review-block">
                <div className="header">
                    <span className="reviews-title headline-2-text">{`ОТЗЫВЫ`}</span>
                    <span className="reviews-count headline-2-text">
                        {product.reviews.length}
                    </span>
                </div>
                <div className="complex-rating-block-container">
                    <ComplexRatingBlock
                        rating={product.averageRating}
                        ratingsCount={product.ratingsCount}
                    />
                </div>
                <div id={REVIEWS_WRAPPER_ID}>
                    <ReviewsList reviewsDataList={product.reviews} />
                </div>
            </div>
            <div className="details-block">
                <div className="reviews-title headline-2-text">{`ОПИСАНИЕ И ХАРАКТЕРИСТИКИ`}</div>
                <div
                    className="full-annotation body-text"
                    id={ANNOTATION_WRAPPER_ID}
                >
                    {product.annotation}
                </div>
                <div id={FULL_DETAILS_ID}>
                    <ProductDetails details={allDetails} />
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
