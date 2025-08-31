import { type ReactElement } from "react";
import "./style.css";

export interface IStyledButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

const StyledButton = ({
    label,
    onClick,
    className,
    disabled = false,
}: IStyledButtonProps): ReactElement => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {label.toUpperCase()}
        </button>
    );
};

export default StyledButton;
