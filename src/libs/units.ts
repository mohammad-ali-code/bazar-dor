const unitsInBangla: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
};

// Returns: প্রতি কেজি
export function getUnitInBangla(unit: string): string {
    return unitsInBangla[unit] ?? unit;
}

// Returns: কেজি
export function getUnitNameInBangla(unit: string): string {
    return getUnitInBangla(unit).replace("প্রতি ", "");
}