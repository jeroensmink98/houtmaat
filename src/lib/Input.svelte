<script>
    import { onMount } from "svelte";
    import { calculatePricePerMeter } from "./Wood";
    import Card from "./Card.svelte";
    export let price_per_cubic_meter;
    export let thickness_mm;
    export let width_mm;

    let allFieldsFilled = false;
    let pricePerMeter = 0;

    const checkFieldsFilled = async () => {
        allFieldsFilled = price_per_cubic_meter && thickness_mm && width_mm;
        if (allFieldsFilled) {
            // Call your function or perform any other action here
            pricePerMeter = await calculatePricePerMeter(
                price_per_cubic_meter,
                thickness_mm,
                width_mm
            );
        }
    };

    function resetFields() {
        price_per_cubic_meter = "";
        thickness_mm = "";
        width_mm = "";
        pricePerMeter = 0;
    }

    onMount(() => {
        checkFieldsFilled(); // Check initial values

        // Event listeners for input fields
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
            input.addEventListener("input", checkFieldsFilled);
        });
    });
</script>

<div class="space-y-4 mt-4">
    <div class="mx-6">
        <label class="mx-1 text-white text-sm" for="price-per-cubic-meter"
            >Prijs per kuub (m3):</label
        >
        <div class="relative">
            <input
                class="px-4 py-2 rounded-md w-full pr-10 bg-[#28605a] text-white"
                type="number"
                id="price-per-cubic-meter"
                bind:value={price_per_cubic_meter}
            />
            <span class="absolute top-0 right-0 pr-3 h-full flex items-center text-white">
                &euro;
            </span>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
        <div class="mx-6">
            <label class="mx-1 text-white text-sm" for="thickness-mm"
                >Dikte in (mm):</label
            >
            <input
                class="px-4 py-2 rounded-md w-full bg-[#28605a] text-white"
                type="number"
                id="thickness-mm"
                bind:value={thickness_mm}
            />
        </div>
        <div class="mx-6">
            <label class="mx-1 text-white text-sm" for="width-mm"
                >Breedte in (mm):</label
            >
            <input
                class="px-4 py-2 rounded-md w-full bg-[#28605a] text-white"
                type="number"
                id="width-mm"
                bind:value={width_mm}
            />
        </div>
    </div>

    <div />

    <Card {pricePerMeter} on:clearInputFields={resetFields} />
</div>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>
