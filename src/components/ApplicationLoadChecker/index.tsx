"use client"

import FullScreenLoader from "@components/FullScreenLoader";
import { setIsLoading } from "@store/slices/Application";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TRootState } from "@store/index";
import { useEffect } from "react";

const ApplicationLoadChecker = () => {
    const isApplicationLoading = useSelector((state: TRootState) => state.application.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleLoad = () => {
            dispatch(setIsLoading(true));
        }

        if(document.readyState === 'complete') {
            handleLoad();
        }

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);
    }, [dispatch]);

    if(!isApplicationLoading) {
        return <FullScreenLoader/>;
    }

    return null;
}

export default ApplicationLoadChecker;