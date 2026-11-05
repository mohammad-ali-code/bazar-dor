import { Product } from "@/types/types";
import Marquee from "react-fast-marquee";
import ProductPriceChangeNumber from "../products/ProductPriceChangeNumber";
import { toBanglaNumber } from "@/libs/numberEnglishToBangla";

const NavMarquee = async () => {
    const productsRes = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
        { next: { revalidate: 300 } },
    );

    if (!productsRes.ok) {
        throw new Error("Failed to fetch product prices");
    }

    const products: Product[] = await productsRes.json();
    return (
        <div className="bg-base-100 border-b border-base-300">
            <Marquee speed={150} pauseOnHover gradient={false}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center border border-base-300 space-x-1.5 px-12 py-2">
                        <span>{product.image}</span>
                        <span className="font-medium">{product.nameBn}</span>

                        <span>৳{toBanglaNumber(product.today)}</span>

                        <ProductPriceChangeNumber
                            priceChange={
                                product.change.pct
                            }></ProductPriceChangeNumber>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default NavMarquee;
