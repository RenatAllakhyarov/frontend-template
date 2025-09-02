import Image from "next/image";
import { ReactElement, MouseEvent } from "react";
import "./style.css";

export interface IImagePreviewButtonProps {
    src?: string;
    alt?: string;
    onClick: (() => void) | (() => Promise<void>);
    onHover?: () => void;
    isLinkOnGallery?: boolean;
    notShowedImagesCount?: number;
    size?: number;
}

const DEFAULT_SIZE: number = 48;

const ImagePreviewButton = ({
    src,
    alt,
    onClick,
    onHover,
    isLinkOnGallery = false,
    notShowedImagesCount,
    size = DEFAULT_SIZE,
}: IImagePreviewButtonProps): ReactElement => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation();

        onClick();
    };

    if (isLinkOnGallery) {
        return (
            <button
                onClick={handleClick}
                style={{ width: size, height: size }}
                className="image-preview-button link"
            >{`+${notShowedImagesCount}`}</button>
        );
    }

    return (
        <button
            onClick={handleClick}
            style={{ width: size, height: size }}
            onMouseEnter={onHover}
            className="image-preview-button"
        >
            {src && alt && (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: "contain" }}
                />
            )}
            <div className="hovered-background"></div>
        </button>
    );
};

export default ImagePreviewButton;
