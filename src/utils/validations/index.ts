export const validateEmailWithMessage = (
    email: string
): { isValid: boolean; message?: string } => {
    if (!email || email.trim() === "") {
        return { isValid: false, message: "Email is required" };
    }

    if (email.indexOf("@") === -1) {
        return { isValid: false, message: "Email must contain @ symbol" };
    }

    const parts = email.split("@");
    const localPart = parts[0];
    const domain = parts[1];

    if (!localPart || !domain) {
        return {
            isValid: false,
            message: "Email must have local part and domain",
        };
    }

    if (domain.indexOf(".") === -1) {
        return { isValid: false, message: "Domain must contain a dot" };
    }

    if (domain.startsWith(".") || domain.endsWith(".")) {
        return {
            isValid: false,
            message: "Domain cannot start or end with a dot",
        };
    }

    return { isValid: true };
};
