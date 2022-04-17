<script lang="ts">
    import type { SvelteComponent } from "svelte";
    export let component: SvelteComponent
</script>


<svelte:component this={component}></svelte:component>