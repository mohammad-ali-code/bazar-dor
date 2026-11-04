import { Product } from "@/types/types";
import Marquee from "react-fast-marquee";

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
        <div className="bg-base-100 border-b border-base-200 py-2.5 ">
            <Marquee speed={150} pauseOnHover gradient={false}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="mx-6 flex items-center gap-2">
                        <span>{product.image}</span>
                        <span className="font-medium">{product.nameBn}</span>

                        <span>৳{product.today}</span>

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
                ))}
            </Marquee>
        </div>
    );
};

export default NavMarquee;
