import ReviewCard from "@components/ReviewCard";
import { IReview } from "@domains/product";
import { ReactElement } from "react";
import "./style.css";

export interface IReviewsListProps {
    reviewsDataList: IReview[];
}

const ReviewsList = ({ reviewsDataList }: IReviewsListProps): ReactElement => {
    return (
        <div className="reviews-list">
            {reviewsDataList.map((reviewData: IReview, index: number) => (
                <ReviewCard key={index} reviewData={reviewData} />
            ))}
        </div>
    );
};

export default ReviewsList;
