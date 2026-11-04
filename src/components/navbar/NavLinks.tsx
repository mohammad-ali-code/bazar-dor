import React from "react";
import NavLink from "./NavLink";
import type { Category } from "@/types/types";
import Link from "next/link";

const NavLinks = async () => {
    const linksRes = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories",
    );
    const linksData: Category[] = await linksRes.json();

    return (
        <div className="bg-base-100 border-b border-base-200 py-2.5 px-10">
            <ul className="flex items-center gap-2">
                <li>
                    <Link href={"/"} className="px-4 py-2 space-x-1.5">
                        <span>🏠</span>
                        <span>হোম</span>
                    </Link>
                </li>
                {linksData.map((link) => (
                    <NavLink key={link.id} link={link}></NavLink>
                ))}
            </ul>
        </div>
    );
};

export default NavLinks;
