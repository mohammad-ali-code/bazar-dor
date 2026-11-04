import React from "react";
import NavLink from "./NavLink";
import type { Category } from "@/types/types";

const NavLinks = async () => {
    const linksRes = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories",
    );
    const linksData: Category[] = await linksRes.json();

    return (
        <div className="bg-base-100 border-b border-base-200 py-2.5 px-10 space-x-2">
            {linksData.map((link) => (
                <NavLink key={link.id} link={link}></NavLink>
            ))}
        </div>
    );
};

export default NavLinks;
