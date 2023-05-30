
/**
 * Calculates the price per meter of material.
 *
 * @param P_pcm - The price per cubic meter.
 * @param thickness_mm - The thickness of the material in millimeters.
 * @param width_mm - The width of the material in millimeters.
 * @returns A Promise that resolves to the price per meter, rounded to two decimal places.
 */
export async function calculatePricePerMeter(P_pcm: number, thickness_mm: number, width_mm: number): Promise<number> {
    // Convert thickness and width from mm to m
    let thickness_m = thickness_mm / 1000;
    let width_m = width_mm / 1000;

    // Calculate volume of 1m length of material
    let volume_m3 = 1 * thickness_m * width_m;

    // Calculate and return price per meter
    let P_pm = P_pcm * volume_m3;
    return Math.round(P_pm * 100) / 100;
}
