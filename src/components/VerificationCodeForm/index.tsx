import API from "@api/index";
import AlertBox from "@components/AlertBox";
import CustomInput from "@components/CustomInput";
import StyledButton from "@components/StyledButton";
import { FormEvent, useState, useRef, useEffect, ReactElement } from "react";
import { StyledButtonTypes } from "@components/StyledButton";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { AlertTypes, getRandomId } from "@utils/constants";
import { setUserRegistered } from "@store/slices/User";
import { setUserId } from "@store/slices/User";
import { useRouter } from "next/navigation";
import { TRootState } from "@store/index";
import "./style.css";

const VerificationCodeForm = (): ReactElement => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { currentEmail } = useAppSelector((state: TRootState) => state.user);

    const [verificationCode, setVerificationCode] = useState<string>("");
    const [isResending, setIsResending] = useState<boolean>(false);
    const [isCodeTrue, setIsCodeTrue] = useState<boolean | null>(null);
    const [countdown, setCountdown] = useState<number>(0);

    const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const timerText =
        countdown > 0
            ? `Resend code in ${countdown}s`
            : isResending
            ? "Resending..."
            : "Resend code";

    const handleStartTimer = () => {
        setCountdown(60);

        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
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

        timerIntervalRef.current = interval;
    };

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
            await API.sendVerifyRequest(currentEmail, verificationCode);

            await dispatch(setUserRegistered(true));

            await dispatch(setUserId(getRandomId().toString()));

            console.log("Code verified successfully!");

            router.push("/market");
        } catch (error) {
            console.error("Error verifying code:", error);
            
            setIsCodeTrue(false);
        }
    };
 
    const handleResendClick = async () => {
        setIsResending(true);

        try {
            await API.sendEmailRequest(currentEmail);

            console.log("Email successfully sent!");

            handleStartTimer();

            setIsCodeTrue(null);
        } catch (error) {
        } finally {
            setIsResending(false);
        }
    };

    useEffect(() => {
        handleStartTimer();

        return () => {
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
            }
        };
    }, []);

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
                        type="button"
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
