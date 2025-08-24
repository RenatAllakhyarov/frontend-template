import dropdownIcon from "@assets/images/dropdownArrow.svg";
import { useEffect, useState, type MouseEvent, type ReactElement } from "react";
import "./style.css";

export interface IOutlinedDropdownItem {
    value: string;
    label: string;
}

export interface IOutlinedDropdownProps {
    initialValue: string;
    onChange: (newValue: string) => void;
    list: IOutlinedDropdownItem[];
    label: string;
    helperLabel: string;
}

const getLabelByValue = (
    list: IOutlinedDropdownItem[],
    value: string
): string | undefined => {
    return list.find((item) => item.value === value)?.label;
};

const getSelectedItemClassSuffix = (
    itemValue: string,
    selectedValue: string
): string => {
    return itemValue !== selectedValue ? "" : " selected";
};

const ITEMS_LIST_CLASS: string = "items-list";
const ITEMS_LIST_OPENED_CLASS_SUFFIX: string = " opened";
const FOCUS_CLASS_SUFFIX: string = " focus";

const DATA_VALUE_ATTRIBUTE: string = "data-value";

const OutlinedDropdown = ({
    initialValue,
    onChange,
    list,
    label,
    helperLabel,
}: IOutlinedDropdownProps): ReactElement => {
    const [value, setValue] = useState<string>(initialValue);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const openDropdown = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation();

        setIsFocus(true);
        setIsOpened(true);
    };

    const closeDropdown = (): void => {
        setIsFocus(false);
        setIsOpened(false);
    };

    useEffect(() => {
        document.addEventListener("click", closeDropdown);

        return () => document.removeEventListener("click", closeDropdown);
    }, []);

    const handleSelect = (event: MouseEvent<HTMLDivElement>): void => {
        const target = event.target as HTMLButtonElement;

        if (!target.className.includes("item")) {
            throw new Error("You incorrect use OutlinedDropdown");
        }

        const selectedValue = target.getAttribute(DATA_VALUE_ATTRIBUTE);

        if (!selectedValue) {
            throw new Error("You incorrect use OutlinedDropdown");
        }

        onChange(selectedValue);
        setValue(selectedValue);
        closeDropdown();
    };

    const itemsListClass: string = !isOpened
        ? ITEMS_LIST_CLASS
        : `${ITEMS_LIST_CLASS}${ITEMS_LIST_OPENED_CLASS_SUFFIX}`;
    const focusClassSuffix: string = !isFocus ? "" : FOCUS_CLASS_SUFFIX;

    return (
        <div className="outlined-dropdown">
            <p className={`label ${focusClassSuffix}`}>{label}</p>
            <button
                className={`open-button${focusClassSuffix}`}
                onClick={openDropdown}
            >
                <p>{getLabelByValue(list, value)}</p>
                <img
                    className={`arrow${focusClassSuffix}`}
                    src={dropdownIcon}
                    alt="dropdown arrow icon"
                ></img>
            </button>
            <p className={`helper-label`}>{helperLabel}</p>
            {isOpened && (
                <div className={itemsListClass} onClick={handleSelect}>
                    {list.map((itemData) => (
                        <button
                            key={itemData.label}
                            className={`item${getSelectedItemClassSuffix(
                                itemData.value,
                                value
                            )}`}
                            data-value={itemData.value}
                        >
                            {itemData.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OutlinedDropdown;
