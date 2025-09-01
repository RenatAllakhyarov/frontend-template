"use client";

import { useParams } from "next/navigation";
import { ReactElement } from "react";

const Publisher = (): ReactElement => {
    const { name: encodingName } = useParams<{ name: string }>();

    const decodingName: string = decodeURIComponent(encodingName);

    if (!decodingName) {
        return <div>Publisher not found</div>;
    }

    return <h1>{`PUBLISHER INFO PAGE: ${decodingName}`}</h1>;
};

export default Publisher;
