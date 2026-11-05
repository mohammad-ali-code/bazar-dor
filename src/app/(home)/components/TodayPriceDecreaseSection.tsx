import ProductsGrid from "@/components/products/ProductsGrid";
import { Product } from "@/types/types";
import React from "react";

const TodayPriceDecreaseSection = async () => {
    const allProductsRes = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
    );
    const allProducts = await allProductsRes.json();
    const pricesIncreasedProducts: Product[] = allProducts.filter(
        (product: Product) => product.change.dir === "down",
    );
    const pricesIncreasedProductsSorted = pricesIncreasedProducts
        .sort((a: Product, b: Product) => a.change.pct - b.change.pct)
        .splice(0, 6);

    return (
        <section className="w-full">
            <h2 className="text-xl text-base-content font-bold space-x-2">
                <span className="text-success">▼</span>
                <span>আজ দাম কমেছে</span>
            </h2>
            <div>
                <ProductsGrid
                    products={
                        pricesIncreasedProductsSorted
                    }></ProductsGrid>
            </div>
        </section>
    );
};

export default TodayPriceDecreaseSection;