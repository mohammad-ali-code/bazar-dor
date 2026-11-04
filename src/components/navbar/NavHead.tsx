import { getBanglaDate } from "@/libs/date";
import Image from "next/image";
const NavHead = () => {
    const today = getBanglaDate();

    return (
        <div className="navbar bg-base-100 border-b border-base-200 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden">
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
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
            </div>
            {/*  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div> */}
            <div className="navbar-end space-x-2 text-sm font-semibold">
                {/* Sign in */}
                <button
                    type="button"
                    className="text-base-content px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ease-out hover:text-primary hover:bg-primary/10 hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    সাইন ইন
                </button>

                {/* Sign up */}
                <button
                    type="button"
                    className="text-primary-content bg-primary border border-secondary rounded-lg shadow-[0_4px_3px_-1px_rgba(5,137,62,0.3)] [box-shadow:0_4px_3px_-2px_rgba(5,137,62,0.3),0_3px_2px_-2px_rgba(5,137,62,0.3),inset_0_0.5px_0_0.5px_rgba(255,255,255,0.06)] px-5 py-2.5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_8px_-2px_rgba(5,137,62,0.35)] active:translate-y-0 active:scale-[0.97] active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    সাইন আপ
                </button>
            </div>
        </div>
    );
};

export default NavHead;
