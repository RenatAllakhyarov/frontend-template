"use client";

import StyledButton from "@components/StyledButton";
import AlertText from "@components/AlertText";
import { setUserEmail, setUserRegistered } from "@store/slices/User";
// import { useAppDispatch, useAppSelector } from "@hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, ReactElement, useState } from "react";
import { AlertTypes } from "@utils/constants";
import "./style.css";
import { TRootState } from "@store/index";

const AuthorizationWindow = (): ReactElement => {
    const dispatch = useDispatch();

    const { currentEmail, isRegistered } = useSelector(
        (state: TRootState) => state.user
    );
    const [localEmail, setLocalEmail] = useState<string>(currentEmail);

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setLocalEmail(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        dispatch(setUserEmail(localEmail));

        console.log("Email submitted:", localEmail);

        dispatch(setUserRegistered(true));
    };

    return (
        <div className="auth-window">
            <div className="auth-header">Welcome to the Tea Shop</div>
            <div className="auth-subtitle">Please register</div>
            <form onSubmit={handleSubmit} className="email-form">
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
            {isRegistered && (
                <AlertText
                    type={AlertTypes.SUCCESS}
                    message="Successfully registered"
                />
            )}
        </div>
    );
};

export default AuthorizationWindow;
