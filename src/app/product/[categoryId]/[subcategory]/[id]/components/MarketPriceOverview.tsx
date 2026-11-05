import React from "react";
import PriceSummary from "./PriceSummary";
import MarketWisePrices from "./MarketWisePrices";
import { Product } from "@/types/types";

interface MarketPriceOverviewPropsType {
    product: Product;
}

const MarketPriceOverview = ({ product }: MarketPriceOverviewPropsType) => {
    return (
        <section className="bg-base-100 border border-base-300 rounded-2xl p-5.5 space-y-6">
            <PriceSummary product={product}></PriceSummary>
            <MarketWisePrices product={product}></MarketWisePrices>
        </section>
    );
};

export default MarketPriceOverview;
