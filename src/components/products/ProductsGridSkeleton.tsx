// components/ProductsGridSkeleton.tsx

interface ProductsGridSkeletonProps {
    count?: number;
}

const ProductsGridSkeleton = ({
    count = 6,
}: ProductsGridSkeletonProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse bg-primary-content border border-base-300 rounded-2xl p-4 space-y-4"
                >
                    {/* Product information */}
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-base-300" />

                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-3/4 rounded bg-base-300" />
                            <div className="h-3 w-1/2 rounded bg-base-300" />
                        </div>
                    </div>

                    {/* Price information */}
                    <div className="flex justify-between items-end">
                        <div className="space-y-2">
                            <div className="h-3 w-16 rounded bg-base-300" />
                            <div className="h-6 w-24 rounded bg-base-300" />
                        </div>

                        <div className="h-7 w-16 rounded-xl bg-base-300" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsGridSkeleton;