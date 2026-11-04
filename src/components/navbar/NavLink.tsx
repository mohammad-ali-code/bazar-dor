import { Category } from "@/types/types";
import Link from "next/link";

type NavLinkProps = {
    link: Category;
};

const NavLink = ({ link }: NavLinkProps) => {
    return (
        <li>
            <Link href={link.slug} className="px-4 py-2 space-x-1.5">
                <span>{link.icon}</span>
                <span>{link.nameBn}</span>
            </Link>
        </li>
    );
};

export default NavLink;
