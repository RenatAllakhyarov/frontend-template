import { ICON_SRC_PREFIX, ICON_SRC_SUFFIX, IconIds } from "@utils/constants"
import { IProductInfo } from "@components/ProductInfoPage"
import { Fragment } from "react"
import './style.css'

const ProductInfo = ({
    product
}: IProductInfo) => {
    return(
        <Fragment>
            <img
                className="preview-icon"
                src={ICON_SRC_PREFIX+IconIds.BOOK+ICON_SRC_SUFFIX}
            />
            
            <div className="product-description">{product.description}</div>
            <div className="other-product-info-headlines-container">
                <div>Tittle:</div>
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
        </Fragment>
    )
}

export default ProductInfo;