import API from "@api/index";
import CustomInput from "@components/CustomInput";
import StyledButton from "@components/StyledButton";
import { useState, ReactElement, FormEvent, useEffect } from "react";
import { StyledButtonTypes } from "@components/StyledButton";
import { validateEmailWithMessage } from "@utils/constants";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { setUserEmail } from "@store/slices/User";
import { TRootState } from "@store/index";
import "./style.css";

interface ISingFormProps {
    onCodeSent: (isCodeWaiting: boolean) => void;
}

const SignInForm = ({ onCodeSent }: ISingFormProps): ReactElement => {
    const dispatch = useAppDispatch();

    const { currentEmail } = useAppSelector((state: TRootState) => state.user);

    const [localEmail, setLocalEmail] = useState<string>(currentEmail);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

    const isSubmitDisabled = !isEmailValid || isLoading;
    const textOfButton = isLoading ? "Sending..." : "Send Code";

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setLocalEmail(event.target.value);
    };

    const handleEmailSubmit = async (event: FormEvent) => {
        event.preventDefault();

        dispatch(setUserEmail(localEmail));

        setIsLoading(true);

        try {
            const response = await API.sendEmailRequest(localEmail);
            if (response.ok) {
                console.log("Email successfully sent!");
                onCodeSent(true);
            }
        } catch (error) {
            console.error("Error sending email:", error);
            console.log("An error occurred while sending the email");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const validation = validateEmailWithMessage(localEmail);

        setIsEmailValid(validation);
    }, [localEmail]);

    return (
        <div className="signin-form-container">
            <form onSubmit={handleEmailSubmit} className="email-form">
                <CustomInput
                    type="email"
                    value={localEmail}
                    onChange={handleEmailChange}
                    placeholder="Input your email..."
                    required={true}
                    disabled={isLoading}
                    label="Email address"
                />
                <StyledButton
                    label={textOfButton}
                    type="submit"
                    uiType={StyledButtonTypes.PRIMARY}
                    disabled={isSubmitDisabled}
                />
            </form>
        </div>
    );
};

export default SignInForm;
