import { AlertTypes } from "@utils/constants";
import { type ReactElement } from "react";
import "./style.css";

export interface IAlertBoxProps {
    message: string;
    type: AlertTypes;
}

const AlertBox = ({ message, type }: IAlertBoxProps): ReactElement => {
    return <div className={`alert-box ${type}`}>{message}</div>;
};

export default AlertBox;
