<script lang="ts">
import RenderMeTest from "../../components/RenderMeTest.svelte";
import { r } from "../../util/svelte-render";


    // const comp = RenderMeTest
    const rendered = r("<h2>kek</h2>").js.code
    // const rendered = RenderMeTest.render({})

</script>

<h1>Output:</h1>
<p>{rendered}</p>