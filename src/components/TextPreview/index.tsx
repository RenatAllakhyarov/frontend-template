import { ReactElement } from "react";
import "./style.css";

interface ITextPreviewProps {
    text: string;
    maxHeight?: number;
}

const DEFAULT_MAX_HEIGHT: number = 120;

const TextPreview = ({
    text,
    maxHeight = DEFAULT_MAX_HEIGHT,
}: ITextPreviewProps): ReactElement => {
    return (
        <div
            className="text-preview-wrapper body-text"
            style={{ maxHeight: `${maxHeight}px` }}
        >
            {text}
        </div>
    );
};

export default TextPreview;
