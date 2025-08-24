"use client";

import SignInForm from "@components/SignInForm";
import VerificationCodeForm from "@components/VerificationCodeForm";
import { ReactElement, useState } from "react";
import "./style.css";

const AuthorizationPage = (): ReactElement => {
    const [isCodeWaiting, setIsCodeWaiting] = useState<boolean>(false);

    return (
        <div className="auth-page">
            <div className="auth-header">Welcome to the Tea Shop</div>
            <div className="auth-subtitle">Please register</div>
            {!isCodeWaiting && <SignInForm handleSubmit={setIsCodeWaiting} />}
            {isCodeWaiting && <VerificationCodeForm />}
        </div>
    );
};

export default AuthorizationPage;
