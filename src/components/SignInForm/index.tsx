import API from "@api/index";
import StyledButton from "@components/StyledButton";
import { validateEmailWithMessage } from "@utils/validations/index";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { useState, ReactElement, FormEvent, Fragment } from "react";
import { setUserEmail } from "@store/slices/User";
import { TRootState } from "@store/index";
import "./style.css";

interface ISingFormProps {
    handleSubmit: () => void;
    countdown: number;
}

const SignInForm = ({
    handleSubmit,
    countdown,
}: ISingFormProps): ReactElement => {
    const dispatch = useAppDispatch();

    const { currentEmail } = useAppSelector((state: TRootState) => state.user);
    const [localEmail, setLocalEmail] = useState<string>(currentEmail);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const textOfButton = isLoading
        ? "Sending..."
        : countdown > 0
        ? `Resend in ${countdown}s`
        : "Send Code";

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
                handleSubmit();
            }
        } catch (error) {
            console.error("Error sending email:", error);
            console.log("An error occurred while sending the email");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleEmailSubmit} className="email-form">
            <input
                type="email"
                value={localEmail}
                onChange={handleEmailChange}
                className="email-input"
                placeholder="Input your email..."
                required
            />
            <StyledButton
                type="submit"
                label={textOfButton}
                disabled={isLoading || countdown > 0}
            />
        </form>
    );
};

export default SignInForm;
