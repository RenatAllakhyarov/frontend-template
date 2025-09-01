import { CSSProperties, type ReactElement } from "react";
import "./style.css";

export interface IStyledButtonProps {
    label: string;
    onClick: () => void;
    isCompleted?: boolean;
    style?: CSSProperties;
    disabled?: boolean;
}

const StyledButton = ({
    label,
    onClick,
    style,
    isCompleted = false,
    disabled = false,
}: IStyledButtonProps): ReactElement => {
    const completedClassname: string = !isCompleted ? "" : "completed";

    return (
        <button
            className={`default-styled-button button-text ${completedClassname}`}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {label.toUpperCase()}
        </button>
    );
};

export default StyledButton;
