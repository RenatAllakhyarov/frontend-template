"use client";

import { PropsWithChildren, ReactNode } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import { redirect } from "next/navigation";

const ProtectedRoute = ({ children }: PropsWithChildren): ReactNode => {
    const { isRegistered } = useSelector((state: TRootState) => state.user);

    if (!isRegistered) {
        redirect("/authorization");
    }

    return children;
};

export default ProtectedRoute;
