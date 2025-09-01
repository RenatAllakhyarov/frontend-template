import { getFormatCount } from "@utils/constants";
import { ReactElement } from "react";
import "./style.css";

export interface ICompactNumberProps {
    count: number;
    className?: string;
    fontSize?: number;
}

const DEFAULT_CLASSNAME: string = "badge-text";

const CompactNumber = ({
    count,
    className,
    fontSize,
}: ICompactNumberProps): ReactElement => {
    const currentClassName: string = className ?? DEFAULT_CLASSNAME;

    const compactCount: string = getFormatCount(count);

    return (
        <span
            style={{ fontSize }}
            className={`compact-number ${currentClassName}`}
        >
            {compactCount}
        </span>
    );
};

export default CompactNumber;
