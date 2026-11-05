import Breadcrumb from "@/components/navbar/Breadcrumb";
import { Product } from "@/types/types";
import React from "react";
import TopSummary from "./components/TopSummary";
import MarketPriceOverview from "./components/MarketPriceOverview";

interface ProductDetailsPageProps {
    params: Promise<{
        productSlug: string[];
    }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
    const { productSlug } = await params;
    const [, , id] = productSlug;

    const productRes = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
    );
    const product: Product = await productRes.json();

    const breadCrumbLinks = [
        {
            label: product.categoryNameBn,
            href: `/products/${product.category}}`,
        },
        {
            label: product.nameBn,
            href: `/products/rice/${product.slug}`,
        },
    ];

    console.log(id);

    return (
        <main className="bg-base-200">
            <div className="max-w-6xl mx-auto py-10 px-4 space-y-6">
                <Breadcrumb items={breadCrumbLinks}></Breadcrumb>
                <TopSummary product={product}></TopSummary>
                <MarketPriceOverview product={product}></MarketPriceOverview>
            </div>
        </main>
    );
};

export default ProductDetailsPage;
