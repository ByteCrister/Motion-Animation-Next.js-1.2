export interface tags {
    beauty: string;
    mascara: string;
}

export interface dimensions {
    width: number;
    height: number;
    depth: number;
}

export interface reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export type images = string[]; 

export type thumbnail = string[];

export interface product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: tags;
    brand: string;
    sku: string;
    weight: number;
    dimensions: dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: reviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: meta;
    images: images;
    thumbnail: thumbnail
}