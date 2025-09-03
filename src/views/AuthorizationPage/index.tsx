"use client";

import SignInForm from "@components/SignInForm";
import VerificationCodeForm from "@components/VerificationCodeForm";
import { ReactElement, useState } from "react";
import "./style.css";

const AuthorizationPage = (): ReactElement => {
    const [isCodeWaiting, setIsCodeWaiting] = useState<boolean>(false);

    return (
        <div className="auth-page-container">
            <div className="auth-page">
                <div className="auth-header headline-4-text">
                    Welcome on website
                </div>
                <div className="auth-subtitle primary-text">
                    Please register
                </div>
                {!isCodeWaiting ? (
                    <SignInForm
                        onCodeSent={() => {
                            setIsCodeWaiting(true);
                        }}
                    />
                ) : (
                    <VerificationCodeForm />
                )}
            </div>
        </div>
    );
};

export default AuthorizationPage;
