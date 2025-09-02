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
            <div className="common-data">
                <span className="headline-2-text">{rating}</span>
                <Rating rating={rating} width="100px" />
                <span className="ratings-count badge-text">
                    {formatRatingsCount}
                </span>
            </div>
            <div className="ratings-statistic-wrapper"></div>
        </div>
    );
};

export default ComplexRatingBlock;
