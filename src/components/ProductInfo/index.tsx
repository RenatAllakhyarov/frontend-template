import TextPreview from "@components/TextPreview";
import StyledButton from "@components/StyledButton";
import ImageSelector from "@components/ImagesSelector";
import ProductDetails from "@components/ProductDetails";
import ProductDetailsManager from "@services/ProductDetailManager";
import { allDetailsConfig, previewDetailsConfig } from "@domains/product";
import { StyledButtonTypes } from "@components/StyledButton";
import { IProductDetail } from "@components/ProductDetails";
import { IProductInfo } from "@components/ProductInfoPage";
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
        </div>
    );
};

export default ProductInfo;
