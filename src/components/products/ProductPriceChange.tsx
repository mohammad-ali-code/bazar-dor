import React from "react";

interface ProductPriceChangePropsType {
    price: number;
}

const ProductPriceChange = ({ price }: ProductPriceChangePropsType) => {
    return (
        <span
            className={
                price > 0
                    ? "text-red-500"
                    : price < 0
                      ? "text-green-500"
                      : "text-gray-500"
            }>
            {price > 0 ? "▲" : price < 0 ? "▼" : "━"}{" "}
            {Math.abs(price)}%
        </span>
    );
};

export default ProductPriceChange;
