import { ReactElement } from "react";
import "./style.css";

const FullScreenLoader = (): ReactElement => {
    return (
        <div className="loader-overlay">
            <div className="spinner" />
        </div>
    );
};

export default FullScreenLoader;
