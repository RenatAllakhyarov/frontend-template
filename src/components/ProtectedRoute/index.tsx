"use client";

import { PropsWithChildren, ReactNode } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";

const ProtectedRoute = ({ children }: PropsWithChildren): ReactNode => {
    const { isRegistered } = useSelector((state: TRootState) => state.user);

    if (!isRegistered) {
        redirect("/authorization");
    }

    return children;
};

export default ProtectedRoute;
