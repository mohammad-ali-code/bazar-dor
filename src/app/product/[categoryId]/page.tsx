import Breadcrumb from "@/components/navbar/Breadcrumb";
import { notFound } from "next/navigation";
import { toBanglaNumber } from "@/libs/numberEnglishToBangla";
import { Category, Product } from "@/types/types";
import ProductSort from "./components/ProductSort";

interface ProductCategoryPageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

const ProductCategoryPage = async ({ params }: ProductCategoryPageProps) => {
    const { categoryId } = await params;

    const [categoryRes, productRes] = await Promise.all([
        fetch(
            `https://openapi.programming-hero.com/api/bazardor/categories/${categoryId}`,
        ),
        fetch(
            `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
        ),
    ]);

    const [category, products]: [Category, Product[]] = await Promise.all([
        categoryRes.json(),
        productRes.json(),
    ]);

    if (!categoryRes.ok) {
        notFound();
    }

    if (products.length === 0) {
        notFound();
    }

    const breadCrumbLinks = [
        {
            label: category.nameBn,
        },
    ];

    return (
        <main className="bg-base-200">
            <div className="max-w-6xl mx-auto py-10 px-4 space-y-6">
                <Breadcrumb items={breadCrumbLinks} />

                <div className="rounded-2xl flex justify-between items-center bg-base-100 border border-base-300 p-5.5">
                    <div className="flex items-center gap-3">
                        <div className="text-4xl">{category.icon}</div>

                        <div>
                            <h1 className="text-2xl font-bold text-base-content">
                                {category.nameBn}
                            </h1>

                            <p className="text-sm text-base-content/70">
                                {toBanglaNumber(products.length)}টি পণ্যের আজকের
                                দাম ও পরিবর্তন
                            </p>
                        </div>
                    </div>
                </div>

                <ProductSort products={products} />
            </div>
        </main>
    );
};

export default ProductCategoryPage;
