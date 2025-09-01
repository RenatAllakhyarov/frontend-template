import Rating from "@components/Rating";
import { getFormatRatingsCount } from "@utils/constants";
import { ReactElement } from "react";
import "./style.css";

export interface IComplexRatingBlockProps {
    rating: number;
    ratingsCount: number;
}

const ComplexRatingBlock = ({
    rating,
    ratingsCount,
}: IComplexRatingBlockProps): ReactElement => {
    const formatRatingsCount: string = getFormatRatingsCount(ratingsCount);

    return (
        <div className="complex-rating-block">
            <Rating rating={rating} width="100px" />
            <span className="average-rating badge-text">{rating}</span>
            <span className="badge-text">{`(${formatRatingsCount})`}</span>
        </div>
    );
};

export default ComplexRatingBlock;
