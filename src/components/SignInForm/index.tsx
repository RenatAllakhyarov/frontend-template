import API from "@api/index";
import StyledButton from "@components/StyledButton";
import { StyledButtonTypes } from "@components/StyledButton";
import { validateEmailWithMessage } from "@utils/constants";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { useState, ReactElement, FormEvent } from "react";
import { setUserEmail } from "@store/slices/User";
import { TRootState } from "@store/index";
import "./style.css";

interface ISingFormProps {
    onCodeSent: () => void;
}

const SignInForm = ({ onCodeSent }: ISingFormProps): ReactElement => {
    const dispatch = useAppDispatch();

    const { currentEmail } = useAppSelector((state: TRootState) => state.user);
    const [localEmail, setLocalEmail] = useState<string>(currentEmail);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const textOfButton = isLoading ? "Sending..." : "Send Code";

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setLocalEmail(event.target.value);
    };

    const handleEmailSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const validation = validateEmailWithMessage(localEmail);

        if (!validation.isValid) {
            return;
        }

        dispatch(setUserEmail(localEmail));
        setIsLoading(true);

        try {
            const response = await API.sendEmailRequest(localEmail);
            if (response.ok) {
                console.log("Email successfully sent!");
                onCodeSent();
            }
        } catch (error) {
            console.error("Error sending email:", error);
            console.log("An error occurred while sending the email");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signin-form-container">
            <form onSubmit={handleEmailSubmit} className="email-form">
                <input
                    type="email"
                    value={localEmail}
                    onChange={handleEmailChange}
                    className="email-input secondary-text"
                    placeholder="Input your email..."
                    required
                    disabled={isLoading}
                />
                <StyledButton
                    label={textOfButton}
                    type="submit"
                    uiType={StyledButtonTypes.PRIMARY}
                    disabled={isLoading}
                />
            </form>
        </div>
    );
};

export default SignInForm;
