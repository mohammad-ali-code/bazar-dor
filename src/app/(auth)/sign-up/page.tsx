import Link from "next/link";
import SignUpForm from "./components/SignUpForm";

const SignUpPage = () => {
    return (
        <div className="bg-base-200">
            <div className="max-w-lg mx-auto px-4 py-12 space-y-6">
                <div className="text-center space-y-1.5">
                    <h1 className="text-3xl font-bold text-base-content">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>
                    <p className="text-sm text-base-content/70">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </div>

                <div className="bg-base-100 border border-base-300 rounded-2xl p-6">
                    <SignUpForm />
                </div>

                <p className="text-center text-sm">
                    <Link
                        href="/"
                        className="text-base-content/60 transition-colors hover:text-primary">
                        ← হোম পেজে ফিরে যান
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
