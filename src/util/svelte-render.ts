import { compile } from 'svelte/compiler'

export const r = (component) => {
    return compile(component, {css: true, enableSourcemap: false, generate: 'ssr'})
}