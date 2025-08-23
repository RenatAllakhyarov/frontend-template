import Link from "next/link";
import { IProduct } from "@domains/Product";
import { ReactElement } from "react";
import "./style.css";

interface IProductCardProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps): ReactElement => {
    const { id, name, price, images } = product;

    const backupImage = "";

    return (
        <Link href={`/product/${id}`} className="product-card">
            <div className="product-image-wrapper">
                <img src={backupImage} alt={name} />
            </div>

            <div className="product-information">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{price} ДУБЛЕЙ</p>
            </div>
        </Link>
    );
};

export default ProductCard;
