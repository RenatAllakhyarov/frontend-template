import Link from "next/link";
import Image from "next/image";
import Price from "@components/Price";
import Rating from "@components/Rating";
import Indicator from "@components/Indicator";
import ImageWrapper from "@components/ImageWrapper";
import CompactNumber from "@components/CompactNumber";
import reviewIconSrc from "@public/icons/reviewIcon.svg";
import { PERCENT_SYMBOL } from "@utils/constants";
import type { IProduct } from "@domains/product";
import { ReactElement } from "react";
import "./style.css";

interface IProductCardProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps): ReactElement => {
    const {
        id,
        title,
        price,
        imagesUrls,
        discount,
        publisher,
        averageRating,
        ratingsCount,
        reviews,
    } = product;

    return (
        <Link href={`/product/${id}`} className="product-card">
            <ImageWrapper
                src={imagesUrls[0]}
                alt={`product preview image ${id}`}
                width={80}
                height={100}
            />
            <div className="product-information">
                <div className="price-block">
                    <Price price={price} discount={discount} />
                    {!!discount && (
                        <Indicator label={`${discount}${PERCENT_SYMBOL}`} />
                    )}
                </div>
                <span className="title">{title}</span>
                <span className="publisher badge-text">{publisher}</span>
            </div>
            <div className="product-feedback">
                <Rating rating={averageRating} width="40%" />
                <CompactNumber count={ratingsCount} />
                <Image
                    src={reviewIconSrc}
                    alt="review icon"
                    width={16}
                    height={16}
                />
                <CompactNumber count={reviews.length} />
            </div>
        </Link>
    );
};

export default ProductCard;
