import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li>
                    <Link
                        href="/"
                        className="text-base-content/60 hover:text-primary">
                        হোম
                    </Link>
                </li>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li
                            key={`${item.label}-${index}`}
                            className="flex items-center gap-2">
                            <span className="text-base-content/40">
                                <IoIosArrowForward />
                            </span>

                            {isLast ? (
                                <span
                                    aria-current="page"
                                    className="font-semibold">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href ?? "/"}
                                    className="text-base-content/60 hover:text-primary">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
