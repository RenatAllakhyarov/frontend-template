import Rating from "@components/Rating";
import { getFormatProductCounts } from "@utils/constants";
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
    const wordForms = ["оценка", "оценки", "оценок"];

    const formatRatingsCount: string = getFormatProductCounts(
        ratingsCount,
        wordForms
    );

    return (
        <div className="complex-rating-line">
            <Rating rating={rating} width="100px" />
            <span className="average-rating badge-text">{rating}</span>
            <span className="badge-text">{`(${formatRatingsCount})`}</span>
        </div>
    );
};

export default ComplexRatingLine;
