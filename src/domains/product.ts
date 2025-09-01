export enum BookCoverTypes {
    HARDCOVER = "hardcover",
    PAPERBACK = "paperback",
    DUST_JACKET = "dustJacket",
    SLIPCASE = "slipcase",
    LEATHER_BOUND = "leatherBound",
    DIGITAL = "digital",
}

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