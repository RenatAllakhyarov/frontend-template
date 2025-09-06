"use client";

import PublisherPage from "@views/PublisherPage";
import { useParams } from "next/navigation";
import { ReactElement } from "react";

const Publisher = (): ReactElement => {
    const { name: encodingName } = useParams<{ name: string }>();

    const decodingName: string = decodeURIComponent(encodingName);

    if (!decodingName) {
        return <div>Publisher not found</div>;
    }

    return <PublisherPage publisher={decodingName} />;
};

export default Publisher;
