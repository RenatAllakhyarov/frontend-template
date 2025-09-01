import Image from "next/image";
import { ICON_SRC_PREFIX, ICON_SRC_SUFFIX, IconIds } from "@utils/constants";
import { IProductInfo } from "@components/ProductInfoPage";
import "./style.css";

const ProductInfo = ({ product }: IProductInfo) => {
    return (
        <div className="product-info">
            <Image
                className="preview-icon"
                src={ICON_SRC_PREFIX + IconIds.BOOK + ICON_SRC_SUFFIX}
                alt="product-info-icon"
                width={200}
                height={300}
            />

            <div className="product-description">{product.description}</div>
            <div className="other-product-info-wrapper">
                <div className="other-product-info-headlines-container">
                    <div>Title:</div>
                    <div>Author:</div>
                    <div>Stock:</div>
                    <div>Created at:</div>
                </div>
                <div className="other-product-info-values-container">
                    <div>{product.title}</div>
                    <div>{product.author}</div>
                    <div>{product.stock}</div>
                    <div>{product.createdAt}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
