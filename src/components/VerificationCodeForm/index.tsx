import StyledButton from "@components/StyledButton";
import { FormEvent, useState, useEffect, ReactElement } from "react";
import { setUserRegistered } from "@store/slices/User";
import { useAppDispatch } from "@hooks/index";
import { redirect } from "next/navigation";
import "./style.css";

interface IVerificationCodeFormProps {
    onResendCode: () => void;
    countdown: number;
}

const VerificationCodeForm = ({
    onResendCode,
    countdown,
}: IVerificationCodeFormProps): ReactElement => {
    const dispatch = useAppDispatch();

    const [verificationCode, setVerificationCode] = useState<string>("");
    const [isCodeChanged, setIsCodeChanged] = useState<boolean>(false);

    const timerText =
        countdown > 0 ? `Resend code in ${countdown}s` : "Resend code";

    const handleCodeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = event.target.value;
        setVerificationCode(value);
        setIsCodeChanged(value.length > 0);
    };

    const handleCodeSubmit = (event: FormEvent): void => {
        event.preventDefault();

        console.log("Password submitted:", verificationCode);

        dispatch(setUserRegistered(true));

        redirect("/market");
    };

    return (
        <div className="code-form-container">
            <form onSubmit={handleCodeSubmit} className="code-form">
                <input
                    type="password"
                    value={verificationCode}
                    onChange={handleCodeChange}
                    className="code-input"
                    placeholder="Enter the code..."
                    required
                />
                {isCodeChanged && (
                    <StyledButton type="submit" label="Confirm" />
                )}
            </form>

            <div className="buttons-row">
                <StyledButton
                    onClick={onResendCode}
                    label={timerText}
                    disabled={countdown > 0}
                />
            </div>
        </div>
    );
};

export default VerificationCodeForm;
