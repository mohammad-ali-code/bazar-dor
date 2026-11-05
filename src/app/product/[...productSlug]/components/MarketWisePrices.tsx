import { Product } from "@/types/types";

interface MarketWisePricesPropsType {
    product: Product;
}

const MarketWisePrices = ({ product }: MarketWisePricesPropsType) => {
    return (
        <section>
            <h2 className="text-lg font-semibold text-base-content mb-3">
                বাজারভিত্তিক আজকের দাম
            </h2>
        </section>
    );
};

export default MarketWisePrices;
