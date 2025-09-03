import { CSSProperties, type ReactElement } from "react";
import "./style.css";

export const enum StyledButtonTypes {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    LINK = "link",
}

export interface IStyledButtonProps {
    label: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    uiType?: StyledButtonTypes;
    isCompleted?: boolean;
    style?: CSSProperties;
    disabled?: boolean;
    className?: string;
}

const StyledButton = ({
    label,
    type,
    onClick,
    uiType = StyledButtonTypes.PRIMARY,
    style,
    isCompleted = false,
    disabled = false,
    className,
}: IStyledButtonProps): ReactElement => {
    const completedClassname: string = !isCompleted ? "" : "completed";

    return (
        <button
            className={`default-styled-button button-text ${uiType} ${completedClassname} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {label}
        </button>
    );
};

export default StyledButton;
