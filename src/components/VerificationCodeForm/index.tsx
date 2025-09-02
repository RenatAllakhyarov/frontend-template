import API from "@api/index";
import StyledButton from "@components/StyledButton";
import { StyledButtonTypes } from "@components/StyledButton";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { FormEvent, useState, ReactElement } from "react";
import { setUserRegistered } from "@store/slices/User";
import { redirect } from "next/navigation";
import { TRootState } from "@store/index";
import "./style.css";

interface IVerificationCodeFormProps {
    countdown: number;
    onResendCode: () => void;
}

const VerificationCodeForm = ({
    onResendCode,
    countdown,
}: IVerificationCodeFormProps): ReactElement => {
    const dispatch = useAppDispatch();

    const { currentEmail } = useAppSelector((state: TRootState) => state.user);
    const [verificationCode, setVerificationCode] = useState<string>("");
    const [isResending, setIsResending] = useState<boolean>(false);

    const timerText =
        countdown > 0
            ? `Resend code in ${countdown}s`
            : isResending
            ? "Resending..."
            : "Resend code";

    const handleCodeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setVerificationCode(event.target.value);
    };

    const handleCodeSubmit = (event: FormEvent): void => {
        event.preventDefault();

        console.log("Password submitted:", verificationCode);

        dispatch(setUserRegistered(true));

        redirect("/market");
    };

    const handleResendClick = async () => {
        if (countdown > 0) return;

        setIsResending(true);
        try {
            const response = await API.sendEmailRequest(currentEmail);
            if (response.ok) {
                console.log("Email successfully sent!");
                onResendCode();
            }
        } catch (error) {
            console.error("Error resending code:", error);
        } finally {
            setIsResending(false);
        }
    };

    return (
        <div className="code-form-container">
            <p className="email-display">Code sent to: {currentEmail}</p>

            <form
                onSubmit={handleCodeSubmit}
                className="code-form secondary-text"
            >
                <input
                    type="text"
                    value={verificationCode}
                    onChange={handleCodeChange}
                    className="code-input "
                    placeholder="Enter the code..."
                    required
                />

                <div className="buttons-row">
                    <StyledButton
                        label={timerText}
                        onClick={handleResendClick}
                        uiType={StyledButtonTypes.PRIMARY}
                        disabled={countdown > 0 || isResending}
                    />

                    <StyledButton
                        label="Confirm"
                        type="submit"
                        uiType={StyledButtonTypes.PRIMARY}
                        disabled={!verificationCode}
                    />
                </div>
            </form>
        </div>
    );
};

export default VerificationCodeForm;
