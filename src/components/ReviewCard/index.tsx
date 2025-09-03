import Rating from "@components/Rating";
import ReactionBlock from "@components/ReactionBlock";
import { getFormatDateToDDMMYYYY } from "@utils/constants";
import { IReview } from "@domains/product";
import { ReactElement } from "react";
import "./style.css";

export interface IReviewCardProps {
    reviewData: IReview;
}

export const enum ReactionTypes {
    POSITIVE = "positive",
    NEGATIVE = "negative",
}

const ReviewCard = ({ reviewData }: IReviewCardProps): ReactElement => {
    const reactionType: string =
        reviewData.rating < 4 ? ReactionTypes.NEGATIVE : ReactionTypes.POSITIVE;

    const formattedDate: string = getFormatDateToDDMMYYYY(reviewData.date);

    return (
        <div className={`review-card ${reactionType}`}>
            <div className="review-card-header badge-thin-text">
                <div className="author">{reviewData.author}</div>
                <div className="date">{formattedDate}</div>
            </div>
            <div className="rating-wrapper">
                <Rating rating={reviewData.rating} />
            </div>
            {reviewData.title && (
                <div className="headline-4-text">{reviewData.title}</div>
            )}
            <div className="text body-text">{reviewData.text}</div>
            <div className="reaction-wrapper">
                <ReactionBlock
                    likesCount={reviewData.likesCount}
                    dislikesCount={reviewData.dislikeCount}
                />
            </div>
        </div>
    );
};

export default ReviewCard;
