<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import Input from "./lib/Input.svelte";
  import Nav from "./lib/Nav.svelte";
</script>

<div class="min-h-screen grid grid-rows-[min-content_1fr_min-content]">
  <div>
    <Nav />
  </div>
  <div class="bg-[#229c8e] opacity-90">
    <div>
      <Input />
    </div>
  </div>

  <div class="flex-grow" />

  <div>
    <Footer />
  </div>
</div>

<style>
  .flex-grow {
    flex-grow: 1;
  }
</style>
