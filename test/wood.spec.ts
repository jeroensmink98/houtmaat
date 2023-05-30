import { expect, test } from 'vitest';
import { calculatePricePerMeter } from '../src/lib/Wood';

test('calculates price per meter correctly', async () => {
    const P_pcm = 1500;  // price per cubic meter in euros
    const thickness_mm = 200;  // thickness in mm
    const width_mm = 200;  // width in mm

    const result = await calculatePricePerMeter(P_pcm, thickness_mm, width_mm);

    // Expected result is 60
    console.log(`Result: ${result}`);
    expect(result).toBe(60);
});
