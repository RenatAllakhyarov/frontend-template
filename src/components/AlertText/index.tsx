import { AlertTypes } from "@utils/constants";
import { type ReactElement } from "react";
import "./style.css";

export interface IAlertTextProps {
    message: string;
    type: AlertTypes;
}

const AlertText = ({ message, type }: IAlertTextProps): ReactElement => {
    return <div className={`alert-message ${type}`}>{message}</div>;
};

export default AlertText;
