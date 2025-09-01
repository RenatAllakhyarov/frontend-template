import { ReactElement } from "react";
import "./style.css";

export const enum IndicatorColorTypes {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export interface IIndicatorProps {
    label: string;
    isCircle?: boolean;
    colorType?: IndicatorColorTypes;
}

const Indicator = ({
    label,
    isCircle = false,
    colorType = IndicatorColorTypes.PRIMARY,
}: IIndicatorProps): ReactElement => {
    const circleClassname: string = !isCircle ? "" : "circle";

    return (
        <span
            className={`indicator badge-text ${circleClassname} ${colorType}`}
        >
            {label}
        </span>
    );
};

export default Indicator;
