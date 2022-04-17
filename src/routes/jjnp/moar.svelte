<script lang="ts">
import type { SSRComponent } from "@sveltejs/kit/types/internal";
import { rrender } from "../../util/r2";

import RenderMeTest from "../../components/RenderMeTest.svelte";


const html = rrender()
</script>

<p>{html}</p>
<!-- <RenderMeTest></RenderMeTest> -->

<style lang="scss">


</style>