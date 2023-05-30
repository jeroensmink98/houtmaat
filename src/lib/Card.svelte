<script>
    export let pricePerMeter;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    // Function to handle button click and dispatch clear event
    function handleButtonClick() {
        dispatch("clearInputFields");
    }
</script>

<div class="card" />
<div
    class=" mx-4 block rounded-md bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#114f48]"
>
    <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
    >
        Prijs per meter
    </h5>
    <p class="mb-4 text-sm text-neutral-600 dark:text-neutral-300">
        (excl): {pricePerMeter} &euro;
    </p>
    <p class="mb-4 text-lg text-white">
        (incl 21%):
        {(pricePerMeter * 1.21).toFixed(2)} &euro;
    </p>
    <button
        type="button"
        class="bg-red-700 rounded-md"
        on:click={handleButtonClick}
    >
        <span class="mx-1 my-1 text-white">Leeg invoer velden</span>
    </button>
</div>

<style>
</style>
