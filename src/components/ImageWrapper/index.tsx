import Image from "next/image";
import { ReactElement } from "react";
import "./style.css";

export interface IImageWrapperProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const ImageWrapper = ({
    src,
    width,
    height,
    alt,
}: IImageWrapperProps): ReactElement => {
    return (
        <div className="image-wrapper">
            <Image src={src} width={width} height={height} alt={alt} />
        </div>
    );
};

export default ImageWrapper;
