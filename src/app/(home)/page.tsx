import BannerSection from "./components/BannerSection";
import TodayPriceDecreaseSection from "./components/TodayPriceDecreaseSection";
import TodaysPriceIncreaseSection from "./components/TodaysPriceIncreaseSection";

export default function Home() {
    return (
        <main className="bg-base-200">
            <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
                <BannerSection></BannerSection>
                <TodaysPriceIncreaseSection></TodaysPriceIncreaseSection>
                <TodayPriceDecreaseSection></TodayPriceDecreaseSection>
            </div>
        </main>
    );
}
