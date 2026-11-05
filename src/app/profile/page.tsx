import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import ProfileForm from "./components/ProfileForm";

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/sign-in");
    }

    const user = session.user;

    return (
        <main className="min-h-screen bg-base-200 px-4 py-8 sm:py-10">
            <div className="mx-auto max-w-5xl space-y-6">
                {/* Page heading */}
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-base-content">
                        আমার প্রোফাইল
                    </h1>
                    <p className="text-sm text-base-content/60">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* User information */}
                <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 sm:p-6">
                    <div className="flex items-center gap-4 min-w-0">
                        <div className="avatar shrink-0">
                            {user.image ? (
                                <div className="w-16 h-16 rounded-2xl overflow-hidden">
                                    <Image
                                        src={user.image}
                                        alt="User profile"
                                        width={64}
                                        height={64}
                                        unoptimized
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-xl font-bold text-primary">
                                    {user.name?.charAt(0).toUpperCase() || "U"}
                                </div>
                            )}
                        </div>

                        <div className="min-w-0 space-y-1">
                            <h2 className="truncate text-lg font-semibold text-base-content">
                                {user.name}
                            </h2>
                            <p className="truncate text-sm text-base-content/60">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <ProfileForm mode="sign-out" />
                </section>

                {/* Profile information form */}
                <section className="rounded-2xl border border-base-300 bg-base-100 p-5 sm:p-7">
                    <h2 className="mb-8 text-lg font-semibold text-base-content">
                        তথ্য
                    </h2>

                    <ProfileForm mode="update" initialName={user.name} />
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;
