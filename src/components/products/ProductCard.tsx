import { Product } from "@/types/types";
import Link from "next/link";
import React from "react";
interface ProductCardPropsType {
    product: Product;
}

const ProductCard = ({ product }: ProductCardPropsType) => {
    const unit = product.unit;

    const unitsInBangla: Record<string, string> = {
        kg: "প্রতি কেজি",
        litre: "প্রতি লিটার",
        dozen: "প্রতি ডজন",
        piece: "প্রতি পিস",
    };

    return (
        // <Link>
            <div
                className="group cursor-pointer bg-primary-content border border-base-300 rounded-2xl p-4 space-y-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_20px_-8px_rgba(5,137,62,0.22)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                role="button"
                tabIndex={0}>
                <div className="flex items-center gap-3">
                    <div className="bg-base-200 rounded-xl text-2xl px-2 py-2 transition-transform duration-200 group-hover:scale-110">
                        {product.image}
                    </div>

                    <div className="text-base-content space-y-1">
                        <h3 className="text-base font-semibold transition-colors group-hover:text-primary">
                            {product.nameBn}
                        </h3>
                        <p className="text-xs">{unitsInBangla[unit]}</p>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="text-base-content">
                        <p className="text-xs">আজকের দাম</p>
                        <p className="text-2xl leading-6 font-bold">
                            {product.today}{" "}
                            <span className="text-sm font-semibold">টাকা</span>
                        </p>
                    </div>

                    <div className="bg-base-200 text-xs font-semibold rounded-xl px-3 py-1">
                        <span
                            className={
                                product.change.pct > 0
                                    ? "text-red-500"
                                    : product.change.pct < 0
                                      ? "text-green-500"
                                      : "text-gray-500"
                            }>
                            {product.change.pct > 0
                                ? "▲"
                                : product.change.pct < 0
                                  ? "▼"
                                  : "━"}{" "}
                            {Math.abs(product.change.pct)}%
                        </span>
                    </div>
                </div>
            </div>
        // </Link>
    );
};

export default ProductCard;
