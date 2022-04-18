<script lang="ts">
import Poster from "$components/tuw/Poster.svelte";

import type { SvelteComponent } from "svelte";
    export let html: string
    export let css: string
</script>
<h1>HTML:</h1>
<p>{html}</p>

<h1>CSS:</h1>
<p>{css}</p>

<!-- <Poster></Poster> -->