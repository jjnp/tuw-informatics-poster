import fs from 'fs'
import compiler from 'svelte/compiler'

export const rrender = () => {
    const src = fs.readFileSync('src/components/RenderMeTest.svelte').toString()
    const ssrComponent = compiler.compile(src, {
        generate: 'dom',
        format: 'esm'
    }).js.code
    return ssrComponent
}
