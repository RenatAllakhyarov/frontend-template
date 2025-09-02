import { CSSProperties, type ReactElement } from "react";
import "./style.css";

export const enum StyledButtonTypes {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    LINK = "link",
}

export interface IStyledButtonProps {
    label: string;
    onClick: () => void;
    type?: StyledButtonTypes;
    isCompleted?: boolean;
    style?: CSSProperties;
    disabled?: boolean;
    className?: string;
}

const StyledButton = ({
    label,
    onClick,
    type = StyledButtonTypes.PRIMARY,
    style,
    isCompleted = false,
    disabled = false,
    className,
}: IStyledButtonProps): ReactElement => {
    const completedClassname: string = !isCompleted ? "" : "completed";

    return (
        <button
            className={`default-styled-button button-text ${type} ${completedClassname} ${className}`}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {label}
        </button>
    );
};

export default StyledButton;
