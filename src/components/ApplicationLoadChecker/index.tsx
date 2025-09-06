"use client";

import FullScreenLoader from "@components/FullScreenLoader";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import { ReactNode } from "react";

const ApplicationLoadChecker = (): ReactNode => {
    const isApplicationLoading = useSelector(
        (state: TRootState) => state.application.isLoading
    );

    if (!isApplicationLoading) {
        return null;
    }

    return <FullScreenLoader />;
};

export default ApplicationLoadChecker;
