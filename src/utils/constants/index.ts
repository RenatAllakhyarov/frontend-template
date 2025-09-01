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
