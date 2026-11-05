"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    IoArrowBack,
    IoHomeOutline,
    IoSearchOutline,
    IoCartOutline,
} from "react-icons/io5";

const NotFound = () => {
    const router = useRouter();

    return (
        <main className="min-h-[75vh] bg-base-200 flex items-center justify-center px-4 py-12 overflow-hidden">
            <div className="max-w-lg w-full text-center">
                {/* Illustration */}
                <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                    {/* Background circle */}
                    <div className="absolute inset-3 rounded-full bg-primary/10" />

                    {/* Decorative elements */}
                    <div className="absolute top-5 right-5 text-primary text-2xl animate-bounce">
                        ✦
                    </div>

                    <div className="absolute bottom-6 left-3 text-secondary text-xl animate-pulse">
                        ✦
                    </div>

                    {/* Shopping basket */}
                    <div className="relative z-10 w-28 h-28 rounded-3xl bg-base-100 border border-base-300 shadow-xl flex items-center justify-center -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-110">
                        <IoCartOutline className="text-6xl text-primary" />

                        <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-error text-error-content flex items-center justify-center text-xs font-bold border-4 border-base-200">
                            404
                        </span>
                    </div>
                </div>

                {/* Error message */}
                <div className="space-y-3">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-base-content tracking-tight">
                        Oops!
                        <span className="text-primary"> 404</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-bold text-base-content">
                        কোনো পণ্য পাওয়া যায়নি!
                    </h2>

                    <p className="text-base-content/60 leading-relaxed max-w-md mx-auto">
                        দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে,
                        অথবা ঠিকানাটি ভুল।
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                    {/* Home button */}
                    <Link
                        href="/"
                        className="btn btn-primary rounded-xl w-full sm:w-auto gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-200">
                        <IoHomeOutline className="text-lg" />
                        হোম পেজে ফিরে যান
                    </Link>

                    {/* Go back button */}
                    <button
                        onClick={() => router.back()}
                        className="btn btn-outline border-base-300 rounded-xl w-full sm:w-auto gap-2 hover:-translate-y-1 active:translate-y-0 transition-all duration-200">
                        <IoArrowBack className="text-lg" />
                        আগের পেজে যান
                    </button>
                </div>

                {/* Extra navigation */}
                <div className="mt-8 pt-6 border-t border-base-300">
                    <p className="text-sm text-base-content/50 mb-3">
                        অথবা বাজারদর খুঁজে দেখুন
                    </p>

                    <Link
                        href="/#all-products"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200">
                        <IoSearchOutline />
                        সব পণ্য দেখুন
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
