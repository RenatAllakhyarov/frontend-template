import API from "@api/index";
import AlertBox from "@components/AlertBox";
import CustomInput from "@components/CustomInput";
import StyledButton from "@components/StyledButton";
import { StyledButtonTypes } from "@components/StyledButton";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { FormEvent, useState, ReactElement } from "react";
import { setUserRegistered } from "@store/slices/User";
import { AlertTypes } from "@utils/constants";
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
    const [isCodeTrue, setIsCodeTrue] = useState<boolean | null>(null);

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
        if (isCodeTrue === false) {
            setIsCodeTrue(null);
        }
    };

    const handleCodeSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await API.sendVerifyRequest(
                currentEmail,
                verificationCode
            );

            if (response.status === 200) {
                const data = await response.json();

                if (data.ok) {
                    dispatch(setUserRegistered(true));
                    console.log("Code verified successfully!");
                    redirect("/market");
                } else {
                    setIsCodeTrue(false);
                }
            } else if (response.status === 401) {
                setIsCodeTrue(false);
            } else {
                setIsCodeTrue(false);
                console.error("Unexpected server error:", response.status);
            }
        } catch (error) {
            console.error("Error verifying code:", error);
            setIsCodeTrue(false);
        }
    };

    const handleResendClick = async () => {
        if (countdown > 0) return;

        setIsResending(true);
        try {
            const response = await API.sendEmailRequest(currentEmail);
            if (response.ok) {
                console.log("Email successfully sent!");
                onResendCode();
                setIsCodeTrue(null);
            }
        } catch (error) {
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
                <CustomInput
                    type="text"
                    value={verificationCode}
                    onChange={handleCodeChange}
                    placeholder="Enter the code..."
                    required={true}
                    label="Verification code"
                />
                {isCodeTrue === false && (
                    <AlertBox
                        message="Incorrect code"
                        type={AlertTypes.ERROR}
                    />
                )}
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
