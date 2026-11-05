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
        <li>
            <Link
                href={href}
                className={`px-4 py-2 space-x-1.5 ${
                    isActive
                        ? "bg-primary text-primary-content font-semibold"
                        : "text-base-content hover:bg-base-200"
                }`}
                aria-current={isActive ? "page" : undefined}>
                <span>{link.icon}</span>
                <span>{link.nameBn}</span>
            </Link>
        </li>
    );
};

export default NavLink;
