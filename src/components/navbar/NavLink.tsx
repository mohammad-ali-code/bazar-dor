"use client";

import { Category } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    link: Category;
};

const NavLink = ({ link }: NavLinkProps) => {
    const pathname = usePathname();
    const href = link.slug === "/" ? "/" : `/product/${link.slug}`;
    const isActive = pathname === href;

    return (
        <li
            className={` px-4 py-2 border flex justify-center items-center border-base-300 space-x-1.5 ${
                isActive
                    ? "bg-primary text-primary-content font-semibold"
                    : "text-base-content hover:bg-base-200"
            }`}>
            <Link href={href} aria-current={isActive ? "page" : undefined}>
                <span>{link.icon}</span>
                <span>{link.nameBn}</span>
            </Link>
        </li>
    );
};

export default NavLink;
