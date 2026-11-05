"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/types";
import ProductsGrid from "@/components/products/ProductsGrid";

type SortOption = "default" | "price-asc" | "price-desc";

interface ProductSortProps {
    products: Product[];
}

const ProductSort = ({ products }: ProductSortProps) => {
    const [sortBy, setSortBy] = useState<SortOption>("default");

    const sortedProducts = useMemo(() => {
        const productsCopy = [...products];

        switch (sortBy) {
            case "price-asc":
                return productsCopy.sort((a, b) => a.today - b.today);

            case "price-desc":
                return productsCopy.sort((a, b) => b.today - a.today);

            default:
                return productsCopy;
        }
    }, [products, sortBy]);

    return (
        <div className="space-y-4">
            {/* Sort control */}
            <div className="flex justify-between items-center gap-3">
                <p className="text-sm text-base-content/70">
                    মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
                </p>

                <div className="flex items-center gap-2">
                    <label
                        htmlFor="product-sort"
                        className="text-sm font-medium whitespace-nowrap">
                        সাজান:
                    </label>

                    <select
                        id="product-sort"
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value as SortOption)
                        }
                        className="select select-bordered select-sm bg-base-100 border-base-300 rounded-lg focus:outline-none focus:border-primary">
                        <option value="default">ডিফল্ট</option>
                        <option value="price-asc">দাম: কম থেকে বেশি</option>
                        <option value="price-desc">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>

            {/* Sorted products */}
            {sortedProducts.length > 0 ? (
                <ProductsGrid products={sortedProducts} />
            ) : (
                <div className="bg-base-100 border border-base-300 rounded-2xl p-10 text-center">
                    <p className="text-base-content/70">
                        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductSort;
