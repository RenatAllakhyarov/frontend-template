import { ReactElement, ChangeEvent } from "react";
import "./style.css";

export interface InputProps {
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: "text" | "email" | "password" | "number" | "tel";
    label?: string;
    variant?: "primary" | "secondary";
    required?: boolean;
    disabled?: boolean;
    className?: string;
    name?: string;
    autoComplete?: string;
}

const CustomInput = ({
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
    disabled = false,
    className = "",
    name,
}: InputProps): ReactElement => {
    const inputClass = `custom-input ${type}`;

    return (
        <div className="input-container">
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={inputClass}
                required={required}
            />
        </div>
    );
};

export default CustomInput;
