import { getBanglaDate } from "@/libs/date";
import Image from "next/image";

const BannerSection = () => {
    const today = getBanglaDate();

    return (
        <section className="w-full">
            <div className="flex flex-col justify-between gap-8 rounded-3xl border border-base-300 bg-primary-content px-4 py-3 lg:flex-row lg:gap-0">
                <div className="w-full text-center lg:text-left">
                    <div className="mb-3 inline-block rounded-full bg-[#e0f1e7] px-4 py-1.5 text-sm font-semibold text-[#008f4c] md:text-base">
                        {today}
                    </div>
                    <h1 className="mb-6 text-3xl font-bold text-base-content md:text-3xl lg:text-4xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>
                    <p className="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-base-content/70 md:text-base lg:mx-0">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <button
                        type="button"
                        className="text-primary-content bg-primary border border-secondary rounded-lg shadow-[0_4px_3px_-1px_rgba(5,137,62,0.3)] [box-shadow:0_4px_3px_-2px_rgba(5,137,62,0.3),0_3px_2px_-2px_rgba(5,137,62,0.3),inset_0_0.5px_0_0.5px_rgba(255,255,255,0.06)] px-5 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_8px_-2px_rgba(5,137,62,0.35)] active:translate-y-0 active:scale-[0.97] active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                        সব পণ্য দেখুন
                    </button>
                </div>
                <div className="w-full flex items-end max-w-78.75 shrink-0">
                    <Image
                        src="/bazar-hero.png"
                        alt="Banner logo"
                        width={315}
                        height={263}
                        priority
                        className="h-auto w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
