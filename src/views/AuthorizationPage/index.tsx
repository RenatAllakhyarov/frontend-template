"use client";

import SignInForm from "@components/SignInForm";
import VerificationCodeForm from "@components/VerificationCodeForm";
import { ReactElement, useState, useEffect } from "react";
import "./style.css";

const AuthorizationPage = (): ReactElement => {
    const [isCodeWaiting, setIsCodeWaiting] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(0);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
        null
    );

    const handleStartTimer = () => {
        setCountdown(60);

        if (timerInterval) {
            clearInterval(timerInterval);
        }

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        setTimerInterval(interval);
    };

    const handleCodeSent = () => {
        setIsCodeWaiting(true);
        handleStartTimer();
    };

    useEffect(() => {
        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
    }, [timerInterval]);

    return (
        <div className="auth-page">
            <div className="auth-header headline-4-text">
                Welcome on website
            </div>
            <div className="auth-subtitle primary-text">Please register</div>
            {!isCodeWaiting ? (
                <SignInForm onCodeSent={handleCodeSent} />
            ) : (
                <VerificationCodeForm
                    countdown={countdown}
                    onResendCode={handleStartTimer}
                />
            )}
        </div>
    );
};

export default AuthorizationPage;
