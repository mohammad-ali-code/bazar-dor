import ProductPriceChangeNumber from "@/components/products/ProductPriceChangeNumber";
import { toBanglaNumber } from "@/libs/numberEnglishToBangla";
import { getUnitInBangla, getUnitNameInBangla } from "@/libs/units";
import { Product } from "@/types/types";
import PriceChangeText from "./PriceChangeText";

interface TopSummaryPropsType {
    product: Product;
}

const TopSummary = ({ product }: TopSummaryPropsType) => {
    const unitNameInBangla = getUnitNameInBangla(product.unit);

    return (
        <div className="bg-primary-content rounded-2xl border border-base-300 flex justify-between items-center p-5.5">
            <div className="flex items-center gap-4">
                <div className="bg-base-200 text-3xl p-5 rounded-2xl">
                    {product.image}
                </div>
                <div className="space-y-2">
                    <div>
                        <p className="text-3xl font-bold text-base-content">
                            {product.nameBn}
                        </p>
                        <p className="text-sm text-base-content/70">
                            {getUnitInBangla(product.unit)} · {product.nameBn}
                        </p>
                    </div>
                    <PriceChangeText
                        today={product.today}
                        yesterday={product.yesterday}></PriceChangeText>
                </div>
            </div>
            <div className="rounded-2xl flex flex-col justify-center items-center bg-base-200 px-5 py-4 space-y-0.5">
                <span className="text-sm text-base-content/70">আজকের দাম</span>
                <span className="text-3xl text-base-content font-bold">
                    {toBanglaNumber(product.today)}
                </span>
                <span className="text-sm text-base-content/70">
                    টাকা / {unitNameInBangla}
                </span>
                <ProductPriceChangeNumber
                    priceChange={product.change.pct}></ProductPriceChangeNumber>
            </div>
        </div>
    );
};

export default TopSummary;
