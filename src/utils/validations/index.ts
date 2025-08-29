export const validateEmailWithMessage = (
    email: string
): { isValid: boolean; message?: string } => {
    if (!email || email.trim() === "") {
        return { isValid: false, message: "Email is required" };
    }

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const trimmedEmail = email.trim();

    if (trimmedEmail.length > 254) {
        return {
            isValid: false,
            message: "Email is too long (max 254 characters)",
        };
    }

    if (!emailRegex.test(trimmedEmail)) {
        return {
            isValid: false,
            message: "Please enter a valid email address",
        };
    }

    const domainPart = trimmedEmail.split("@")[1];
    if (!domainPart.includes(".")) {
        return {
            isValid: false,
            message: "Please enter a valid email address",
        };
    }

    return { isValid: true };
};
