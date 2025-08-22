import {
    useEffect,
    useState,
    type ChangeEvent,
    type ReactElement,
} from "react";
import "./style.css";

export interface IOutlinedTextAreaProps {
    initialValue: string;
    onChange: (newValue: string) => void;
    label?: string;
    helperLabel?: string;
}

const INPUT_LABEL_FOCUS_CLASS_SUFFIX: string = " focus";
const INPUT_LABEL_ACTIVE_CLASS_SUFFIX: string = " active";

const OutlinedTextArea = ({
    initialValue,
    onChange,
    label,
    helperLabel,
}: IOutlinedTextAreaProps): ReactElement => {
    const [query, setQuery] = useState<string>(initialValue);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
        setQuery(event.target.value);
    };

    const handleFocusIn = (): void => {
        setIsFocus(true);
        setIsActive(true);
    };

    const handleFocusOut = (): void => {
        if (query) {
            setIsActive(false);

            return;
        }

        setIsFocus(false);
        setIsActive(false);
    };

    useEffect(() => {
        if (query.length) {
            setIsFocus(true);
        }
    }, []);

    const labelFocusClassSuffix: string = !isFocus
        ? ""
        : INPUT_LABEL_FOCUS_CLASS_SUFFIX;
    const labelActiveClassSuffix: string = !isActive
        ? ""
        : INPUT_LABEL_ACTIVE_CLASS_SUFFIX;

    return (
        <div className="outlined-text-area">
            <div className="input-container">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    onFocus={handleFocusIn}
                    onBlur={handleFocusOut}
                />
                <div
                    className={`label${labelFocusClassSuffix}${labelActiveClassSuffix}`}
                >
                    {label}
                </div>
            </div>
            <div className="helper-label">{helperLabel}</div>
        </div>
    );
};

export default OutlinedTextArea;
