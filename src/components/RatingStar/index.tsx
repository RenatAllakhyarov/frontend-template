import { ReactElement, useId } from "react";
import "./style.css";

export interface IRatingStarProps {
    value: number;
    color?: string;
}

const DEFAULT_FILL_COLOR = "#FFC533";
const EMPTY_COLOR = "#d1d6da";

const RatingStar = ({ value, color }: IRatingStarProps): ReactElement => {
    const currentColor = color ?? DEFAULT_FILL_COLOR;

    const gradientId = useId();

    const currentFill: string = !value ? EMPTY_COLOR : `url(#${gradientId})`;

    return (
        <svg
            className="rating-star"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <defs>
                <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
                    <stop offset={`${value * 100}%`} stopColor={currentColor} />
                    <stop offset={`${value * 100}%`} stopColor={EMPTY_COLOR} />
                </linearGradient>
            </defs>

            <path
                fill={currentFill}
                d="M12.388 18.129a.75.75 0 0 0-.777 0l-4.639 2.813a.75.75 0 0 1-1.124-.79l1.134-5.622a.75.75 0 0 0-.219-.693l-4.09-3.876a.75.75 0 0 1 .433-1.29l5.407-.6a.75.75 0 0 0 .608-.452l2.188-5.162a.75.75 0 0 1 1.381 0l2.188 5.162a.75.75 0 0 0 .608.452l5.407.6a.75.75 0 0 1 .433 1.29l-4.09 3.876a.75.75 0 0 0-.22.693l1.135 5.622a.75.75 0 0 1-1.124.79l-4.639-2.813Z"
            />
        </svg>
    );
};

export default RatingStar;
