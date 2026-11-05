import { toBanglaNumber } from "@/libs/numberEnglishToBangla";
import { Product } from "@/types/types";

interface MarketWisePricesPropsType {
    product: Product;
}

// 62 -> "৬২", 63.5 -> "৬৩.৫০"
const formatPrice = (value: number) =>
    toBanglaNumber(Number.isInteger(value) ? value : value.toFixed(2));

const MarketWisePrices = ({ product }: MarketWisePricesPropsType) => {
    const rows = product.markets.map((market) => ({
        ...market,
        avg: (market.min + market.max) / 2,
    }));

    const rowsSorted = rows.sort((a, b) => a.avg - b.avg);

    return (
        <section>
            <h2 className="text-lg font-semibold text-base-content mb-3">
                বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100">
                <table className="w-full text-sm text-base-content">
                    <thead>
                        <tr className="text-base-content/60 font-medium border-b border-base-300">
                            <th className="px-4 py-3.5 text-left font-medium">
                                বাজার
                            </th>
                            <th className="px-4 py-3.5 text-left font-medium">
                                বিভাগ
                            </th>
                            <th className="px-4 py-3.5 text-right font-medium">
                                সর্বনিম্ন
                            </th>
                            <th className="px-4 py-3.5 text-right font-medium">
                                সর্বাধিক
                            </th>
                            <th className="px-4 py-3.5 text-right font-medium">
                                গড়
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowsSorted.map((row) => (
                            <tr
                                key={`${row.market}-${row.division}`}
                                className="even:bg-base-200/60 border-b border-neutral/80 last:border-b-0 transition-colors hover:bg-primary/5">
                                <td className="px-4 py-3.5 text-left">
                                    {row.market}
                                </td>
                                <td className="px-4 py-3.5 text-left">
                                    {row.division}
                                </td>
                                <td className="px-4 py-3.5 text-right">
                                    {formatPrice(row.min)} টাকা
                                </td>
                                <td className="px-4 py-3.5 text-right">
                                    {formatPrice(row.max)} টাকা
                                </td>
                                <td className="px-4 py-3.5 text-right font-semibold">
                                    {formatPrice(row.avg)} টাকা
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MarketWisePrices;
