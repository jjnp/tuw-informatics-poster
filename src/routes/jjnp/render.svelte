<script lang="ts">
import RenderMeTest from "../../components/RenderMeTest.svelte";
import { doFullCompile, r } from "../../util/svelte-render";

    // const comp = RenderMeTest
    // const rendered = r(`<RenderMeTest/>`).js.code
    // const rendered = RenderMeTest.render({})

    // const kek = doFullCompile(`<RenderMeTest></RenderMeTest>`)

    const kek = doFullCompile(`<h3>asdfasdf</h3>`)
</script>

<h1>Output:</h1>
<p>{'hello'}</p>