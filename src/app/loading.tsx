import ProductsSectionSkeleton from "@/components/products/ProductsSectionSkeleton";

export default function Loading() {
    return (
        <main className="bg-base-200">
            <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
                <div className="animate-pulse h-64 rounded-3xl bg-base-300" />

                <ProductsSectionSkeleton title="▲ আজ দাম বেড়েছে" />

                <ProductsSectionSkeleton title="▼ আজ দাম কমেছে" />

                <ProductsSectionSkeleton title="সব পণ্য" count={12} />
            </div>
        </main>
    );
}
