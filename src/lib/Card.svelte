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
<div class=" mx-4 block rounded-md p-6 bg-[#114f48]">
    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-50">
        Prijs per meter
    </h5>
    <p class="mb-4 text-sm text-neutral-400">
        (excl): {pricePerMeter.toFixed(2)} &euro;
    </p>
    <p class="mb-4 text-lg text-neutral-200">
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
