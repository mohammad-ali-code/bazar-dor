import { toBanglaNumber } from "@/libs/numberEnglishToBangla";
import { Product } from "@/types/types";

interface PriceChangeProps {
    today: Product["today"];
    yesterday: Product["yesterday"];
}

const PriceChangeText = ({ today, yesterday }: PriceChangeProps) => {
    const difference = today - yesterday;

    const isUp = difference > 0;

    if (difference === 0) {
        return (
            <p className="text-xs text-base-content/60">
                গতকালের তুলনায় আজ দাম অপরিবর্তিত
            </p>
        );
    }

    return (
        <div className="flex flex-wrap items-center gap-1 text-xs">
            <span className="text-base-content/60">গতকালের তুলনায় আজ দাম</span>

            <span
                className={
                    isUp
                        ? "font-semibold text-error"
                        : "font-semibold text-success"
                }>
                {isUp ? "বেড়েছে" : "কমেছে"}
            </span>

            <span className="text-base-content/70">
                · {toBanglaNumber(Math.abs(difference))} টাকা
            </span>
        </div>
    );
};

export default PriceChangeText;
