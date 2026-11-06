"use client";
import { auth } from "@/lib/auth";
import { authClient, signOut, useSession } from "@/lib/auth-client";
import { getBanglaDate } from "@/libs/date";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface NavHeadPropsType {
    serverSession: typeof auth.$Infer.Session | null;
}

const NavHead = ({ serverSession }: NavHeadPropsType) => {
    const today = getBanglaDate();
    const router = useRouter();
    const { data: clientSession, isPending, isRefetching } = useSession();

    // Initialize the client session store with the server result.
    authClient.hydrateSession(serverSession);

    // Use server data during initial loading, then use live client data.
    const session = isPending && !isRefetching ? serverSession : clientSession;

    const handleSignOut = () => {
        signOut();
        toast.success("Logout Successful.")
        router.refresh();
    };

    return (
        <div className="navbar bg-base-100 border-b border-base-200 px-2 lg:px-10">
            <div className="navbar-start">
                <Link href={"/"}>
                    <div className="flex items-center gap-2">
                        <div className="bg-primary rounded-xl p-2">
                            <Image
                                src={"/logo.png"}
                                width={25}
                                height={25}
                                alt="Logo"></Image>
                        </div>
                        <div>
                            <h2 className="text-base-content text-xl font-bold">
                                বাজার দর
                            </h2>
                            <p className="text-base-content text-xs">{today}</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="navbar-end space-x-2 text-sm font-semibold">
                {session?.user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost flex h-auto gap-2 px-2">
                            <div className="avatar">
                                <div className="w-9 text-2xl rounded-full">
                                    <div className="avatar">
                                        {session?.user.image ? (
                                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                                <Image
                                                    src={session.user.image}
                                                    height={36}
                                                    width={36}
                                                    alt="User profile"
                                                    unoptimized
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                                                {session?.user.name
                                                    ?.charAt(0)
                                                    .toUpperCase() || "U"}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm font-medium text-base-content">
                                {session?.user.name}
                            </p>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li>
                                <h3 className="text-base-content text-sm font-semibold">
                                    {session.user.name}
                                </h3>
                                <p className="text-xs text-base-content/70">
                                    {session.user.email}
                                </p>
                            </li>
                            <li className="text-base-content text-sm font-medium">
                                <Link href="/profile">👤 আমার প্রোফাইল</Link>
                            </li>
                            <li className="text-error text-sm">
                                <button type="button" onClick={handleSignOut}>
                                    ↩ সাইন আউট
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <>
                        {/* Sign in */}
                        <Link href={"/sign-in"}>
                            <button
                                type="button"
                                className="text-base-content px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ease-out hover:text-primary hover:bg-primary/10 hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                                সাইন ইন
                            </button>
                        </Link>

                        {/* Sign up */}
                        <Link href={"/sign-up"}>
                            <button
                                type="button"
                                className="text-primary-content bg-primary border border-secondary rounded-lg shadow-[0_4px_3px_-1px_rgba(5,137,62,0.3)] [box-shadow:0_4px_3px_-2px_rgba(5,137,62,0.3),0_3px_2px_-2px_rgba(5,137,62,0.3),inset_0_0.5px_0_0.5px_rgba(255,255,255,0.06)] px-5 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_8px_-2px_rgba(5,137,62,0.35)] active:translate-y-0 active:scale-[0.97] active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                                সাইন আপ
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavHead;
