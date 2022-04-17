<script lang="ts">
import type { SvelteComponent } from "svelte";
    export let html: string
    export let css: string
</script>
<h1>HTML:</h1>
<p>{html}</p>

<h1>CSS:</h1>
<p>{css}</p>