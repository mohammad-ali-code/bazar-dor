import React from "react";
import NavLink from "./NavLink";
import type { Category } from "@/types/types";

const NavLinks = async () => {
    const linksRes = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories",
    );
    const linksData: Category[] = await linksRes.json();

    const homeLink = {
        id: "0",
        slug: "/",
        nameBn: "হোম",
        icon: "🏠",
    };

    return (
        <div className="bg-base-100 border-b border-base-200 lg:px-10">
            <ul className="grid grid-cols-3 lg:flex lg:items-center lg:flex-wrap">
                <NavLink link={homeLink}></NavLink>
                {linksData.map((link) => (
                    <NavLink key={link.id} link={link}></NavLink>
                ))}
            </ul>
        </div>
    );
};

export default NavLinks;
