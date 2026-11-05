import { Suspense } from "react";
import AllProductsSection from "./components/AllProductsSection";
import BannerSection from "./components/BannerSection";
import TodayPriceDecreaseSection from "./components/TodayPriceDecreaseSection";
import TodaysPriceIncreaseSection from "./components/TodaysPriceIncreaseSection";
import ProductsSectionSkeleton from "@/components/products/ProductsSectionSkeleton";

export default function Home() {
    return (
        <main className="bg-base-200">
            <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
                <BannerSection />
                <Suspense
                    fallback={
                        <ProductsSectionSkeleton title="▲ আজ দাম বেড়েছে" />
                    }>
                    <TodaysPriceIncreaseSection />
                </Suspense>
                <Suspense
                    fallback={
                        <ProductsSectionSkeleton title="▼ আজ দাম কমেছে" />
                    }>
                    <TodayPriceDecreaseSection />
                </Suspense>
                <Suspense
                    fallback={
                        <ProductsSectionSkeleton title="সব পণ্য" count={12} />
                    }>
                    <AllProductsSection />
                </Suspense>
            </div>
        </main>
    );
}
