import { Product } from "@/types/types";
import React from "react";
import ProductCard from "./ProductCard";
interface ProductsGridPropsType {
    products: Product[];
}

const ProductsGrid = ({
    products,
}: ProductsGridPropsType) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  mt-5">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    );
};

export default ProductsGrid;
