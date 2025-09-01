import ImageWrapper from "@components/ImageWrapper";
import ImagePreviewButton from "@components/ImagePreviewButton";
import { ReactElement, useState } from "react";
import "./style.css";

export interface IImageSelectorProps {
    imagesSrcList: string[];
}

const SHOW_OTHER_IMAGES_TO_SELECT_COUNT: number = 3;

const ImageSelector = ({
    imagesSrcList,
}: IImageSelectorProps): ReactElement => {
    const [selectedImageSrc, setSelectedImageSrc] = useState<string>(
        imagesSrcList[0]
    );

    const unselectedImagesSrcList: string[] = imagesSrcList.filter(
        (src: string) => src !== selectedImageSrc
    );
    const unselectedShowedImagesSrcList: string[] =
        unselectedImagesSrcList.slice(0, SHOW_OTHER_IMAGES_TO_SELECT_COUNT);

    const notShowedImagesCount: number =
        unselectedImagesSrcList.length - unselectedShowedImagesSrcList.length;

    return (
        <div className="image-selector">
            <div className="selected-image-wrapper">
                <ImageWrapper
                    src={selectedImageSrc}
                    width={240}
                    height={100}
                    alt="selected image"
                />
            </div>
            <div className="images-preview-buttons-wrapper">
                {unselectedShowedImagesSrcList.map(
                    (showedImageSrc: string, index: number) => (
                        <ImagePreviewButton
                            key={index}
                            src={showedImageSrc}
                            alt={`image preview ${index}`}
                            onHover={() => setSelectedImageSrc(showedImageSrc)}
                            onClick={() => console.log("YOU OPEN GALLERY!")}
                        />
                    )
                )}
                {!!notShowedImagesCount && (
                    <ImagePreviewButton
                        isLinkOnGallery={true}
                        notShowedImagesCount={notShowedImagesCount}
                        onClick={() => console.log("YOU OPEN GALLERY!")}
                    />
                )}
            </div>
        </div>
    );
};

export default ImageSelector;
