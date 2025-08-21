"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
    const params = useParams<{ id: string }>();

    const { id: currentIdProduct } = params;

    return <div>Product page for product by id: {currentIdProduct}</div>;
}
