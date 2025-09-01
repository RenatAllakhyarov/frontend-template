import TextPreview from "@components/TextPreview";
import StyledButton from "@components/StyledButton";
import ImageSelector from "@components/ImagesSelector";
import { StyledButtonTypes } from "@components/StyledButton";
import { IProductInfo } from "@components/ProductInfoPage";
import "./style.css";

const ANNOTATION_WRAPPER_ID = "annotation";

const ProductInfo = ({ product }: IProductInfo) => {
    const handleScrollToAnnotaion = (): void => {
        const reviewsElement: HTMLElement | null = document.getElementById(
            ANNOTATION_WRAPPER_ID
        );

        if (!reviewsElement) {
            console.error("You incorrect set id on annotation wrapper!");

            return;
        }

        reviewsElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="product-info-wrapper">
            <div className="primary-block">
                <div className="images-block">
                    <ImageSelector imagesSrcList={product.imagesUrls} />
                </div>
                <div className="info-block">
                    <div className="text-preview-wrapper">
                        <TextPreview text={product.annotation} />
                    </div>
                    <div className="annotation-scroll-button-wrapper">
                        <StyledButton
                            onClick={handleScrollToAnnotaion}
                            label="Перейти к описанию"
                            type={StyledButtonTypes.SECONDARY}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
