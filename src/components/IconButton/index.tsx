import Image from "next/image";
import { type ReactElement, type MouseEvent, CSSProperties } from "react";
import "./style.css";

export const enum IconButtonFlexTypes {
    ROW = "row",
    COLUMN = "column",
}

export const enum IconButtonTypes {
    PRIMARY = "primary",
    GHOST = "ghost",
}

export interface IIconButtonProps {
    src: string;
    isActive?: boolean;
    type?: IconButtonTypes;
    flexType?: IconButtonFlexTypes;
    iconSize?: number;
    label?: string;
    className?: string;
    textClassname?: string;
    textStyles?: CSSProperties;
    onClick: (() => void) | (() => Promise<void>);
    alt: string;
}

const DEFAULT_ICON_SIZE: number = 30;
const DEFAULT_TEXT_CLASSNAME: string = "button-text";

const IconButton = ({
    src,
    isActive = false,
    type = IconButtonTypes.PRIMARY,
    flexType = IconButtonFlexTypes.ROW,
    iconSize = DEFAULT_ICON_SIZE,
    label,
    className,
    alt,
    textStyles,
    textClassname = DEFAULT_TEXT_CLASSNAME,
    onClick,
}: IIconButtonProps): ReactElement => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation();

        onClick();
    };

    const activeClassname: string = !isActive ? "" : "active";

    return (
        <button
            className={`icon-button ${flexType} ${type} ${activeClassname} ${className}`}
            onClick={handleClick}
        >
            <Image src={src} alt={alt} width={iconSize} />
            {label && (
                <span style={textStyles} className={textClassname}>
                    {label}
                </span>
            )}
        </button>
    );
};

export default IconButton;
