"use client";

import { type SubmitEvent, useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const inputClass =
    "w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content placeholder:text-base-content/50 transition-colors focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30";

const socialButtonClass =
    "flex flex-1 items-center justify-center gap-2 rounded-xl border border-base-300 bg-base-100 px-4 py-2.5 text-sm font-semibold text-base-content transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formObject = Object.fromEntries(formData.entries());

        console.log(formObject);

        const { data, error } = await signIn.email({
            email: String(formObject.email),
            password: String(formObject.password),
        });

        if (data?.user.name) {
            toast.success(`Welcome back ${data.user.name}`);
            redirect("/");
        }

        if (error?.message) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        const data = await signIn.social({
            provider: "google",
        });

        console.log(data);
    };

    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                            autoComplete="current-password"
                            placeholder="আপনার পাসওয়ার্ড লিখুন"
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

                <button
                    type="submit"
                    className="w-full text-primary-content bg-primary border border-secondary rounded-xl font-semibold shadow-[0_4px_3px_-2px_rgba(5,137,62,0.3),0_3px_2px_-2px_rgba(5,137,62,0.3)] px-5 py-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_8px_-2px_rgba(5,137,62,0.35)] active:translate-y-0 active:scale-[0.98] active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    লগইন করুন
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
                অ্যাকাউন্ট নেই?{" "}
                <Link
                    href="/sign-up"
                    className="font-medium text-(--link-primary) hover:underline">
                    সাইন আপ করুন
                </Link>
            </p>
        </div>
    );
};

export default SignInForm;
