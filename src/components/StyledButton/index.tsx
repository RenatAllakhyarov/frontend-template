import { type ReactElement } from "react";
import "./style.css";

export interface IStyledButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const StyledButton = ({
    label,
    onClick,
    disabled = false,
}: IStyledButtonProps): ReactElement => {
    return (
        <button className="styled-button" onClick={onClick} disabled={disabled}>
            {label.toUpperCase()}
        </button>
    );
};

export default StyledButton;
