export const validateEmailWithMessage = (
    email: string
): { isValid: boolean; message?: string } => {
    if (!email || email.trim() === "") {
        return { isValid: false, message: "Email is required" };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            message: "Please enter a valid email address",
        };
    }

    return { isValid: true };
};
