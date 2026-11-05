import { toBanglaNumber } from "@/libs/numberEnglishToBangla";
import React from "react";

interface ProductPriceChangeNumberPropsType {
    priceChange: number;
}

const ProductPriceChangeNumberNumber = ({
    priceChange,
}: ProductPriceChangeNumberPropsType) => {
    return (
        <span
            className={
                priceChange > 0
                    ? "text-red-500"
                    : priceChange < 0
                      ? "text-green-500"
                      : "text-gray-500"
            }>
            {priceChange > 0 ? "▲" : priceChange < 0 ? "▼" : "━"}{" "}
            {toBanglaNumber(Math.abs(priceChange))}%
        </span>
    );
};

export default ProductPriceChangeNumberNumber;
