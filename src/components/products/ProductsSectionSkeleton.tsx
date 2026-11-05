// components/ProductsSectionSkeleton.tsx

import ProductsGridSkeleton from "./ProductsGridSkeleton";

interface Props {
    title: string;
    count?: number;
}

const ProductsSectionSkeleton = ({ title, count = 6 }: Props) => {
    return (
        <section className="w-full">
            <h2 className="text-xl text-base-content font-bold">{title}</h2>

            <ProductsGridSkeleton count={count} />
        </section>
    );
};

export default ProductsSectionSkeleton;
