import RatingStar from "@components/RatingStar";
import { ReactElement } from "react";
import "./style.css";

export interface IRatingProps {
    rating: number;
    width?: string;
}

const DEFAULT_WIDTH: string = "100%";
const STAR_COUNT: number = 5;

const Rating = ({
    rating,
    width = DEFAULT_WIDTH,
}: IRatingProps): ReactElement => {
    const fullStarCount: number = Math.floor(rating);
    const lastStarValue: number = rating - fullStarCount;
    const emptyStarCount: number = STAR_COUNT - fullStarCount - 1;

    console.log(
        "FULL STAR COUNT: ",
        fullStarCount,
        " LAST STAR VALUE: ",
        lastStarValue
    );

    return (
        <div style={{ width }} className="rating">
            {Array.from({ length: fullStarCount }).map((_, index: number) => (
                <RatingStar key={index} value={1} />
            ))}
            <RatingStar value={lastStarValue} />
            {Array.from({ length: emptyStarCount }).map((_, index: number) => (
                <RatingStar key={index} value={0} />
            ))}
        </div>
    );
};

export default Rating;
