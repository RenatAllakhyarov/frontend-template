import Link from "next/link";
import { ICON_PREFIX, IconIds } from "@utils/constants";
import { IProduct } from "@domains/product";
import { ReactElement } from "react";
import "./style.css";

interface IProductCardProps {
    product: IProduct;
}

const backupImage = `${ICON_PREFIX}/${IconIds.BOOK}`;

const ProductCard = ({ product }: IProductCardProps): ReactElement => {
    const { id, title, price, author } = product;

    return (
        <Link href={`/product/${id}`} className="product-card">
            <div className="product-image-wrapper">
                <img src={backupImage} alt={title} />
            </div>

            <div className="product-information">
                <p className="product-price">{price} ₽</p>
                <h3 className="product-title">{title}</h3>
                <p className="product-author">{author}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
