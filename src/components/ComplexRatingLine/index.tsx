import Rating from "@components/Rating";
import { getFormatRatingsCount } from "@utils/constants";
import { ReactElement } from "react";
import "./style.css";

export interface IComplexRatingLineProps {
    rating: number;
    ratingsCount: number;
}

const ComplexRatingLine = ({
    rating,
    ratingsCount,
}: IComplexRatingLineProps): ReactElement => {
    const formatRatingsCount: string = getFormatRatingsCount(ratingsCount);

    return (
        <div className="complex-rating-line">
            <Rating rating={rating} width="100px" />
            <span className="average-rating badge-text">{rating}</span>
            <span className="badge-text">{`(${formatRatingsCount})`}</span>
        </div>
    );
};

export default ComplexRatingLine;
