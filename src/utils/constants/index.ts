export const enum AlertTypes {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
}

export const ICON_SRC_PREFIX = "/icons/";
export const ICON_SRC_SUFFIX = ".svg";

export const enum IconIds {
    BOOK = "book",
}

export const enum RoutesUrls {
    MARKET = "/market",
    PRODUCT = "/product",
    CART = "/cart",
}

export const CURRENCY: string = "₽";
export const PERCENT_SYMBOL: string = "%";

export function getFormatCount(count: number): string {
    if (count < 1000) return count.toString();

    const units = [
        { value: 1e9, symbol: "B" },
        { value: 1e6, symbol: "M" },
        { value: 1e3, symbol: "K" },
    ];

    for (const unit of units) {
        if (count < unit.value) {
            continue;
        }

        const flooredCount = (count / unit.value).toFixed(1);

        return `${flooredCount}${unit.symbol}`;
    }

    return count.toString();
}

export function formsForCounts(
    count: number,
    forms: [string, string, string]
): string {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastDigit === 1) {
        return `${count} ${forms[0]}`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return `${count} ${forms[1]}`;
    }

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${count} ${forms[2]}`;
    }

    return `${count} ${forms[2]}`;
}

export const getFormatProductsCount = (count: number): string =>
    formsForCounts(count, ["товар", "товара", "товаров"]);

export const getFormatReviewsCount = (count: number): string =>
    formsForCounts(count, ["отзыв", "отзыва", "отзывов"]);

export const getFormatRatingsCount = (count: number): string =>
    formsForCounts(count, ["оценка", "оценки", "оценок"]);

export const getFormatBuyCount = (buyCount: number): string => {
    const units = [1e9, 1e6, 1e3];

    for (const unit of units) {
        if (buyCount < unit) {
            continue;
        }

        const otherBuyCount: number = buyCount % unit;

        const rangeBuyCount: number = buyCount - otherBuyCount;

        return `Купили более ${rangeBuyCount} человек`;
    }

    return `Купили более ${buyCount} человек`;
};

export const scrollToElementById = (id: string): void => {
    const reviewsElement: HTMLElement | null = document.getElementById(id);

    if (!reviewsElement) {
        console.error("You incorrect set target id on scrolling!");

        return;
    }

    reviewsElement.scrollIntoView({ behavior: "smooth" });
};

export const getFormatDateToDDMMYYYY = (defaultDateString: string): string => {
    const date = new Date(defaultDateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    return `${day}.${month}.${year}`;
};

export const getFullClassnameByList = (...list: string[]): string => {
    return list.filter(Boolean).join(" ");
};

export const EMAIL_REGEX =
    /^(?!\s)(?!.*\s$)(?!.*\s@)(?!.*@\s)(?!.*\s\.)(?!\.\s)(?!.*\.\s@)(?!.*@\s\.)(?!.*\s\.\s)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-\s]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.(?:com|ru|org|net|gov|edu|io|info|biz|de|fr|uk|jp|cn|au|ca|es|it|nl|se|no|dk|fi|pl|br|mx|ar|ch|at|be|pt|gr|tr|ua|kz|by|az|il|in|co|me|tv|us|cc|nu|eu|xyz|online|site|tech|store|shop|app|dev|ai|cloud)(?:\.[a-zA-Z]{2,})?)$/;

export const validateEmailWithMessage = (email: string) => {
    return EMAIL_REGEX.test(email);
};
