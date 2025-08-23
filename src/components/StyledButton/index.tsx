import { type ReactElement } from "react";
import "./style.css";

export interface IStyledButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}

const StyledButton = ({
    label,
    type = "button",
    onClick,
    disabled = false,
}: IStyledButtonProps): ReactElement => {
    return (
        <button
            className="styled-button"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {label.toUpperCase()}
        </button>
    );
};

export default StyledButton;
