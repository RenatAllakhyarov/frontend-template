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

export const getFormatRatingsCount = (ratingsCount: number): string => {
    const labelPrefix: string = `${ratingsCount} оцен`;

    const lastNumber: number = ratingsCount % 10;

    if (lastNumber === 1) {
        return `${labelPrefix}ка`;
    }

    if (lastNumber > 1 && lastNumber < 5) {
        return `${labelPrefix}ки`;
    }

    return `${labelPrefix}ок`;
};

export const getFormatReviewsCount = (reviewsCount: number): string => {
    const labelPrefix: string = `${reviewsCount} отзыв`;

    const lastNumber: number = reviewsCount % 10;

    if (lastNumber === 1) {
        return labelPrefix;
    }

    if (lastNumber > 1 && lastNumber < 5) {
        return `${labelPrefix}а`;
    }

    return `${labelPrefix}ов`;
};

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

export const getFormatProductsCount = (productsCount: number): string => {
    if (productsCount === 0) {
        return "0 товаров";
    };

    const labelPrefix: string = `${productsCount} товар`;

    const lastDigit: number = productsCount % 10;

    const lastTwoDigits: number = productsCount % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${labelPrefix}ов`;
    }

    if (lastDigit === 1) {
        return `${labelPrefix}`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return `${labelPrefix}а`;
    }

    return `${labelPrefix}ов`;
};