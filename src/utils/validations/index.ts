export const validateEmailWithMessage = (
    email: string
): { isValid: boolean; message?: string } => {
    if (!email || email.trim() === "") {
        return { isValid: false, message: "Email is required" };
    }

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const trimmedEmail = email.trim();

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

    const allowedDomains = [
        "com",
        "ru",
        "org",
        "net",
        "gov",
        "edu",
        "io",
        "info",
        "biz",
        "de",
        "fr",
        "uk",
        "jp",
        "cn",
        "au",
        "ca",
        "es",
        "it",
        "nl",
        "se",
        "no",
        "dk",
        "fi",
        "pl",
        "br",
        "mx",
        "ar",
        "ch",
        "at",
        "be",
        "pt",
        "gr",
        "tr",
        "ua",
        "kz",
        "by",
        "az",
        "il",
        "in",
        "co",
        "me",
        "tv",
        "us",
        "cc",
        "nu",
        "eu",
        "xyz",
        "online",
        "site",
        "tech",
        "store",
        "shop",
        "app",
        "dev",
        "ai",
        "cloud",
    ];

    const domainParts = domainPart.split(".");
    const tld = domainParts[domainParts.length - 1].toLowerCase();

    if (!allowedDomains.includes(tld)) {
        return {
            isValid: false,
            message:
                "Please use a valid email domain (e.g., .com, .ru, .org, etc.)",
        };
    }

    if (domainParts.length >= 2) {
        const secondLevelDomain =
            domainParts[domainParts.length - 2].toLowerCase();
        const fullDomain = `${secondLevelDomain}.${tld}`;

        const popularDomains = [
            "gmail.com",
            "yahoo.com",
            "hotmail.com",
            "outlook.com",
            "aol.com",
            "mail.ru",
            "yandex.ru",
            "rambler.ru",
            "icloud.com",
            "protonmail.com",
            "zoho.com",
            "gmx.com",
            "live.com",
            "msn.com",
            "inbox.com",
        ];

        if (!popularDomains.includes(fullDomain) && tld.length < 2) {
            return {
                isValid: false,
                message: "Please use a valid email domain",
            };
        }
    }

    return { isValid: true };
};
