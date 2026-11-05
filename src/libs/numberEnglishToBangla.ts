export function toBanglaNumber(value: string | number): string {
    const banglaDigits = "০১২৩৪৫৬৭৮৯";

    return String(value).replace(/[0-9]/g, (digit) => {
        return banglaDigits[Number(digit)];
    });
}
