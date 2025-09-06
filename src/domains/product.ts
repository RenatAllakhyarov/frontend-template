export enum BookCoverTypes {
    HARDCOVER = "hardcover",
    PAPERBACK = "paperback",
    DUST_JACKET = "dustJacket",
    SLIPCASE = "slipcase",
    LEATHER_BOUND = "leatherBound",
    DIGITAL = "digital",
}

export const bookCoverLabels: Record<BookCoverTypes, string> = {
    [BookCoverTypes.HARDCOVER]: "Твёрдый переплёт",
    [BookCoverTypes.PAPERBACK]: "Мягкая обложка",
    [BookCoverTypes.DUST_JACKET]: "Суперобложка",
    [BookCoverTypes.SLIPCASE]: "Футляр",
    [BookCoverTypes.LEATHER_BOUND]: "Кожаный переплёт",
    [BookCoverTypes.DIGITAL]: "Цифровое издание",
};

export interface IDetailLabelData<T> {
    label: string;
    valuesDictionary?: Record<T & PropertyKey, string>;
    link?: string;
}

export type TDetailsConfig = {
    [key in keyof Partial<IProduct>]: IDetailLabelData<IProduct[key]>;
};

export const allDetailsConfig: TDetailsConfig = {
    coverType: { label: "Тип обложки", valuesDictionary: bookCoverLabels },
    pagesCount: { label: "Количество страниц" },
    weight: { label: "Вес, г" },
    publisher: { label: "Издательство", link: "/publisher/" },
    publisherBrand: { label: "Издательский бренд" },
    ageRating: { label: "Возрастное ограничение" },
    publicationYear: { label: "Год издания" },
    ISBN: { label: "ISBN" },
};

export const previewDetailsConfig: TDetailsConfig = {
    coverType: { label: "Тип обложки", valuesDictionary: bookCoverLabels },
    pagesCount: { label: "Количество страниц" },
    weight: { label: "Вес, г" },
    publisher: { label: "Издательство", link: "/publisher/" },
    publisherBrand: { label: "Издательский бренд" },
};

export enum Ratings {
    LOW = 1,
    SMALL = 2,
    MEDIUM = 3,
    GOOD = 4,
    EXCELLENT = 5,
}

export interface IReview {
    author: string;
    title?: string;
    text: string;
    rating: Ratings;
    date: string;
    likesCount: number;
    dislikeCount: number;
}

export interface IProduct {
    id: string;
    title: string;
    price: number;
    discount: number;
    isAvailable: boolean;
    quantity: number;
    coverType: BookCoverTypes;
    pagesCount: number;
    weight: number;
    annotation: string;
    publisher: string;
    publisherBrand: string;
    buyReasons: string[];
    ageRating: string;
    publicationYear: string;
    ISBN: string;
    reviews: IReview[];
    salesCount: number;
    averageRating: number;
    ratingsCount: number;
    imagesUrls: string[];
}
