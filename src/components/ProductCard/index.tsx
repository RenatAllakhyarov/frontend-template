import Link from "next/link";
import { IProduct } from "@domains/Product";
import { ReactElement } from "react";
import "./style.css";

interface IProductCardProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps): ReactElement => {
    const { id, title, price, author } = product;

    const backupImage = "/icons/book.svg";

    return (
        <Link href={`/product/${id}`} className="product-card">
            <div className="product-image-wrapper">
                <img src={backupImage} alt={title} />
            </div>

            <div className="product-information">
                <p className="product-price">{price} ДУБЛЕЙ</p>
                <h3 className="product-title">{title}</h3>
                <p className="product-author">{author}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
