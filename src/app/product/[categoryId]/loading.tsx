const Loading = () => {
    return (
        <main className="bg-base-200">
            <div className="max-w-6xl mx-auto py-10 px-4 space-y-6 animate-pulse">
                {/* Breadcrumb skeleton */}
                <div className="flex items-center gap-2">
                    <div className="h-4 w-12 rounded bg-base-300" />
                    <div className="h-3 w-3 rounded bg-base-300" />
                    <div className="h-4 w-20 rounded bg-base-300" />
                </div>

                {/* Category information card */}
                <div className="rounded-2xl flex items-center bg-base-100 border border-base-300 p-5.5">
                    <div className="flex items-center gap-3">
                        {/* Category icon */}
                        <div className="w-12 h-12 rounded-xl bg-base-300" />

                        <div className="space-y-2">
                            {/* Category name */}
                            <div className="h-7 w-36 rounded bg-base-300" />

                            {/* Product count description */}
                            <div className="h-4 w-52 rounded bg-base-300" />
                        </div>
                    </div>
                </div>

                {/* Sort row */}
                <div className="flex justify-between items-center gap-3">
                    {/* Product count */}
                    <div className="h-4 w-36 rounded bg-base-300" />

                    {/* Sort label and dropdown */}
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-10 rounded bg-base-300" />
                        <div className="h-8 w-40 rounded-lg bg-base-300" />
                    </div>
                </div>

                {/* Product cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-primary-content border border-base-300 rounded-2xl p-4 space-y-3">
                            {/* Product name and unit */}
                            <div className="flex items-center gap-3">
                                {/* Product image / emoji */}
                                <div className="w-12 h-12 rounded-xl bg-base-300 shrink-0" />

                                <div className="space-y-2 flex-1">
                                    {/* Product name */}
                                    <div className="h-5 w-3/4 rounded bg-base-300" />

                                    {/* Product unit */}
                                    <div className="h-3 w-1/2 rounded bg-base-300" />
                                </div>
                            </div>

                            {/* Today's price and price change */}
                            <div className="flex justify-between items-end">
                                <div className="space-y-2">
                                    {/* Today's price label */}
                                    <div className="h-3 w-16 rounded bg-base-300" />

                                    {/* Price */}
                                    <div className="h-6 w-24 rounded bg-base-300" />
                                </div>

                                {/* Price change badge */}
                                <div className="h-7 w-14 rounded-xl bg-base-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Loading;
