import Image from "next/image";
import { type ReactElement, type MouseEvent } from "react";
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
    onClick: (() => void) | (() => Promise<void>);
    alt: string;
}

const DEFAULT_ICON_SIZE: number = 30;

const IconButton = ({
    src,
    isActive = false,
    type = IconButtonTypes.PRIMARY,
    flexType = IconButtonFlexTypes.ROW,
    iconSize = DEFAULT_ICON_SIZE,
    label,
    alt,
    onClick,
}: IIconButtonProps): ReactElement => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation();

        onClick();
    };

    const activeClassname: string = !isActive ? "" : "active";

    return (
        <button
            className={`icon-button ${flexType} ${type} ${activeClassname}`}
            onClick={handleClick}
        >
            <Image src={src} alt={alt} width={iconSize} />
            {label && <span>{label}</span>}
        </button>
    );
};

export default IconButton;
