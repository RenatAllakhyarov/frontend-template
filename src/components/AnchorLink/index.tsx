import { type ReactElement } from "react";
import "./style.css";

export interface IAnchorLinkProps {
    label: string;
    href: string;
    newTab: boolean;
}

const NEW_TAB_TARGET: string = "_blank";
const CURRENT_TAB_TARGET: string = "_top";

const AnchorLink = ({
    label,
    href,
    newTab,
}: IAnchorLinkProps): ReactElement => {
    const target: string = !newTab ? CURRENT_TAB_TARGET : NEW_TAB_TARGET;

    return (
        <a className="anchor-link" href={href} target={target}>
            {label}
        </a>
    );
};

export default AnchorLink;
