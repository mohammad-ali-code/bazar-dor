"use client";

import { SubmitEvent, useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { signIn, signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const inputClass =
    "w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content placeholder:text-base-content/50 transition-colors focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30";

const socialButtonClass =
    "flex flex-1 items-center justify-center gap-2 rounded-xl border border-base-300 bg-base-100 px-4 py-2.5 text-sm font-semibold text-base-content transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formObject = Object.fromEntries(formData.entries());

        if (formObject.password !== formObject.confirmPassword) {
            toast.error(
                "Password does not match. Please check both passwords.",
            );
            return;
        }

        const { data, error } = await signUp.email({
            name: String(formObject.name),
            email: String(formObject.email),
            password: String(formObject.password),
        });

        if (data?.token) {
            toast.success(`Welcome ${data?.user.name}`);
            router.push("/");
        }

        if (error?.message) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        await signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-base-content">
                        নাম
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="যেমন: রহিম উদ্দিন"
                        className={inputClass}
                    />
                </div>
                <div className="space-y-1.5">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-base-content">
                        ইমেইল
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={inputClass}
                    />
                </div>
                <div className="space-y-1.5">
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-base-content">
                        পাসওয়ার্ড
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            minLength={8}
                            autoComplete="new-password"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            className={`${inputClass} pr-12`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={
                                showPassword
                                    ? "পাসওয়ার্ড লুকান"
                                    : "পাসওয়ার্ড দেখান"
                            }
                            aria-pressed={showPassword}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-primary transition-colors">
                            {showPassword ? (
                                <IoEyeOffOutline size={20} />
                            ) : (
                                <IoEyeOutline size={20} />
                            )}
                        </button>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label
                        htmlFor="confirm-password"
                        className="text-sm font-medium text-base-content">
                        পাসওয়ার্ড নিশ্চিত করুন
                    </label>
                    <div className="relative">
                        <input
                            id="confirm-password"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            autoComplete="new-password"
                            placeholder="আবার লিখুন"
                            className={`${inputClass} pr-12`}
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword((prev) => !prev)
                            }
                            aria-label={
                                showConfirmPassword
                                    ? "পাসওয়ার্ড লুকান"
                                    : "পাসওয়ার্ড দেখান"
                            }
                            aria-pressed={showConfirmPassword}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-primary transition-colors">
                            {showConfirmPassword ? (
                                <IoEyeOffOutline size={20} />
                            ) : (
                                <IoEyeOutline size={20} />
                            )}
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full text-primary-content bg-primary border border-secondary rounded-xl font-semibold shadow-[0_4px_3px_-2px_rgba(5,137,62,0.3),0_3px_2px_-2px_rgba(5,137,62,0.3)] px-5 py-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_8px_-2px_rgba(5,137,62,0.35)] active:translate-y-0 active:scale-[0.98] active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    অ্যাকাউন্ট তৈরি করুন
                </button>
            </form>
            <div className="flex items-center gap-3 text-xs text-base-content/70">
                <span className="h-px flex-1 bg-base-300" />
                অথবা
                <span className="h-px flex-1 bg-base-300" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className={socialButtonClass}>
                    <FcGoogle size={18} />
                    Google দিয়ে চালিয়ে যান
                </button>
            </div>

            <p className="text-center text-sm text-base-content">
                অ্যাকাউন্ট আছে?{" "}
                <Link
                    href="/sign-in"
                    className="font-medium text-(--link-primary) hover:underline">
                    সাইন ইন করুন
                </Link>
            </p>
        </div>
    );
};

export default SignUpForm;
