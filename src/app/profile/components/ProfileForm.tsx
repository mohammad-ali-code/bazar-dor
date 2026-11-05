"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, type SubmitEvent } from "react";
import { toast } from "react-toastify";

interface ProfileFormProps {
    mode: "update" | "sign-out";
    initialName?: string;
}

const ProfileForm = ({ mode, initialName = "" }: ProfileFormProps) => {
    const router = useRouter();
    const [name, setName] = useState(initialName);

    const handleUpdate = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error("নাম লিখুন।");
            return;
        }

        const { error } = await authClient.updateUser({
            name: name.trim(),
        });

        if (error) {
            toast.error(error.message || "তথ্য আপডেট করা যায়নি।");
            return;
        }

        toast.success("আপনার নাম সফলভাবে আপডেট হয়েছে।");
        router.refresh();
    };

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error(error.message || "সাইন আউট করা যায়নি।");
            return;
        }

        toast.success("সফলভাবে সাইন আউট হয়েছে।");
        router.replace("/sign-in");
        router.refresh();
    };

    if (mode === "sign-out") {
        return (
            <button
                type="button"
                onClick={handleSignOut}
                className="shrink-0 rounded-xl border border-error px-4 py-2.5 text-sm font-medium text-error transition-colors hover:bg-error hover:text-error-content">
                ↩ সাইন আউট
            </button>
        );
    }

    return (
        <form onSubmit={handleUpdate} className="space-y-4">
            <div className="space-y-2">
                <label
                    htmlFor="profile-name"
                    className="block text-sm font-medium text-base-content">
                    নাম
                </label>

                <input
                    id="profile-name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="আপনার নাম লিখুন"
                    required
                    className="w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-xl border border-secondary bg-primary px-5 py-3 font-semibold text-primary-content shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.98]">
                আপডেট
            </button>
        </form>
    );
};

export default ProfileForm;
