import ProductsGrid from "@/components/products/ProductsGrid";
import { Product } from "@/types/types";
import React from "react";

const AllProductsSection = async () => {
    const allProductsRes = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
    );
    const allProducts: Product[] = await allProductsRes.json();

    return (
        <section id="all-products">
            <div>
                <h2 className="text-xl text-base-content font-bold">সব পণ্য</h2>
                <p className="text-sm text-base-content/70">
                    মোট {}টি পণ্য দেখানো হচ্ছে
                </p>
            </div>
            <ProductsGrid products={allProducts}></ProductsGrid>
        </section>
    );
};

export default AllProductsSection;
