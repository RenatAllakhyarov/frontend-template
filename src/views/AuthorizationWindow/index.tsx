"use client";

import AlertText from "@components/AlertText";
import StyledButton from "@components/StyledButton";
import { setUserEmail, setUserRegistered } from "@store/slices/User";
import { validateEmailWithMessage } from "@utils/validations/index";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { FormEvent, ReactElement, useState } from "react";
import { AlertTypes } from "@utils/constants";
import { TRootState } from "@store/index";
import "./style.css";

const AuthorizationPage = (): ReactElement => {
    const dispatch = useAppDispatch();

    const { currentEmail } = useAppSelector((state: TRootState) => state.user);
    const [localEmail, setLocalEmail] = useState<string>(currentEmail);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setLocalEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setPassword(event.target.value);
    };

    const handleEmailSubmit = (event: FormEvent): void => {
        event.preventDefault();

        const validation = validateEmailWithMessage(localEmail);
        if (!validation.isValid) {
            return;
        }

        dispatch(setUserEmail(localEmail));

        console.log("Email submitted:", localEmail);

        setIsLogged(true);
    };

    const handlePasswordSubmit = (event: FormEvent): void => {
        event.preventDefault();

        console.log("Password submitted:", password);

        dispatch(setUserRegistered(true));
    };

    return (
        <div className="auth-page">
            <div className="auth-header">Welcome to the Tea Shop</div>
            <div className="auth-subtitle">Please register</div>
            {!isLogged && (
                <form onSubmit={handleEmailSubmit} className="email-form">
                    <input
                        type="email"
                        value={localEmail}
                        onChange={handleEmailChange}
                        className="email-input"
                        placeholder="Email"
                        required
                    />
                    <StyledButton type="submit" label="Login" />
                </form>
            )}
            {isLogged && (
                <form onSubmit={handlePasswordSubmit} className="code-form">
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="code-input"
                        required
                    />
                    <StyledButton type="submit" label="Code" />
                </form>
            )}
        </div>
    );
};

export default AuthorizationPage;
