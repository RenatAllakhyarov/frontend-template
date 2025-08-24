import StyledButton from "@components/StyledButton";
import { FormEvent, useState, ReactElement } from "react";
import { setUserRegistered } from "@store/slices/User";
import { useAppDispatch } from "@hooks/index";
import { redirect } from "next/navigation";

const VerificationCodeForm = (): ReactElement => {
    const dispatch = useAppDispatch();

    const [verificationCode, setVerificationCode] = useState<string>("");

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setVerificationCode(event.target.value);
    };

    const handlePasswordSubmit = (event: FormEvent): void => {
        event.preventDefault();

        console.log("Password submitted:", verificationCode);

        dispatch(setUserRegistered(true));

        redirect("/market");
    };

    return (
        <form onSubmit={handlePasswordSubmit} className="code-form">
            <input
                type="password"
                value={verificationCode}
                onChange={handlePasswordChange}
                className="code-input"
                placeholder="Enter the code"
                required
            />
            <StyledButton type="submit" label="Code" />
        </form>
    );
};

export default VerificationCodeForm;
