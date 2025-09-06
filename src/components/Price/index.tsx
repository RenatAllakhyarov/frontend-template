import { CSSProperties, ReactElement } from "react";
import { CURRENCY } from "@utils/constants";
import "./style.css";

export interface IPriceProps {
    price: number;
    discount?: number;
    fontSize?: number;
}

const MARGIN_BOTTOM_BY_FONT_SIZE_MULTIPLIER: number = 2;
const FONT_SIZE_NOT_GAP_MAXIMUM_VALUE: number = 20;
const CUSTOM_FONT_SIZE_OLD_TO_NEW_PRICE_MULTIPLIER: number = 5;

const Price = ({ price, discount, fontSize }: IPriceProps): ReactElement => {
    const currentOldPriceStyles: CSSProperties = !fontSize ? {} : { fontSize };
    const currentPrimaryFontSizeStyle: CSSProperties = !fontSize
        ? {}
        : { fontSize: fontSize + CUSTOM_FONT_SIZE_OLD_TO_NEW_PRICE_MULTIPLIER };

    currentOldPriceStyles.marginBottom =
        !fontSize || fontSize <= FONT_SIZE_NOT_GAP_MAXIMUM_VALUE
            ? "0px"
            : `${fontSize / MARGIN_BOTTOM_BY_FONT_SIZE_MULTIPLIER}px`;

    if (!discount) {
        return (
            <span
                className="price current primary-text"
                style={currentPrimaryFontSizeStyle}
            >{`${price}${CURRENCY}`}</span>
        );
    }

    const currentPrice: number = price * ((100 - discount) / 100);

    return (
        <span className="price-wrapper">
            <div
                className="price old secondary-text"
                style={currentOldPriceStyles}
            >
                {`${price}${CURRENCY}`}
                <svg
                    width="53"
                    height="5"
                    viewBox="0 0 53 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="old-price-line"
                >
                    <path
                        d="M.75 4c16.814-4 34.686-4 51.5 0"
                        stroke="#FA1157"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
            <div
                className="price current primary-text"
                style={currentPrimaryFontSizeStyle}
            >{`${currentPrice}${CURRENCY}`}</div>
        </span>
    );
};

export default Price;
