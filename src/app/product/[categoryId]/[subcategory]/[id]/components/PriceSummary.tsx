import { toBanglaNumber } from "@/libs/numberEnglishToBangla";
import { getUnitNameInBangla } from "@/libs/units";
import { Product } from "@/types/types";

interface PriceSummaryPropsType {
    product: Product;
}

const PriceSummary = ({ product }: PriceSummaryPropsType) => {
    const markets = product.markets;
    const lowestPrice = Math.min(...markets.map((market) => market.min));
    const highestPrice = Math.max(...markets.map((market) => market.max));
    const averagePrice = Math.round((highestPrice + lowestPrice) / 2);

    return (
        <section>
            <h2 className="text-lg font-semibold text-base-content mb-3">
                দামের সারসংক্ষেপ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="border border-base-300 rounded-2xl w-full px-6 py-4">
                    <h3 className="text-xs text-base-content">সর্বনিম্ন দাম</h3>
                    <p className="text-2xl font-bold text-success">
                        {toBanglaNumber(lowestPrice)}{" "}
                        <span className="text-sm font-medium">টাকা</span>
                    </p>
                    <p className="text-xs text-base-content">
                        সবচেয়ে কম দামের বাজার
                    </p>
                </div>
                <div className="border border-base-300 rounded-2xl w-full px-6 py-4">
                    <h3 className="text-xs text-base-content">সর্বাধিক দাম</h3>
                    <p className="text-2xl font-bold text-error">
                        {toBanglaNumber(highestPrice)}{" "}
                        <span className="text-sm font-medium">টাকা</span>
                    </p>
                    <p className="text-xs text-base-content">
                        সবচেয়ে বেশি দামের বাজার
                    </p>
                </div>
                <div className="border border-base-300 rounded-2xl w-full px-6 py-4">
                    <h3 className="text-xs text-base-content">গড় দাম</h3>
                    <p className="text-2xl font-bold text-success">
                        {toBanglaNumber(averagePrice)}{" "}
                        <span className="text-sm font-medium">টাকা</span>
                    </p>
                    <p className="text-xs text-base-content">
                        প্রতি {getUnitNameInBangla(product.unit)}-এর হিসাবে
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PriceSummary;
