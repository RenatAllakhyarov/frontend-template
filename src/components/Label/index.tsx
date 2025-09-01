import Image from "next/image";
import { ReactElement } from "react";
import "./style.css";

export const enum LabelsTypes {
    SECONDARY = "secondary",
}

export interface ILabelProps {
    label: string;
    src?: string;
    type?: LabelsTypes;
}

const Label = ({
    label,
    src,
    type = LabelsTypes.SECONDARY,
}: ILabelProps): ReactElement => {
    return (
        <div className={`label-wrapper ${type}`}>
            {src && <Image src={src} alt="label icon" width={24} height={24} />}
            <span>{label}</span>
        </div>
    );
};

export default Label;
