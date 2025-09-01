import API from "@api/index";
import StyledButton from "@components/StyledButton";
import { validateEmailWithMessage } from "@utils/validations/index";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { useState, ReactElement, FormEvent } from "react";
import { setUserEmail } from "@store/slices/User";
import { TRootState } from "@store/index";

interface ISingFormProps {
    handleSubmit: (isCodeWaiting: boolean) => void;
}

const SignInForm = ({ handleSubmit }: ISingFormProps): ReactElement => {
    const dispatch = useAppDispatch();

    const { currentEmail } = useAppSelector((state: TRootState) => state.user);
    const [localEmail, setLocalEmail] = useState<string>(currentEmail);

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

        try {
            const response = await API.sendEmailRequest(localEmail);

            if (response.ok) {
                console.log("Email successfully sent!");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            console.log("An error occurred while sending the email");
        }

        handleSubmit(true);
    };

    return (
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
    );
};

export default SignInForm;
