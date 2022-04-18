import { renderToPdf } from "../../util/render-pdf"
import RenderMeTestSvelte from "../../components/RenderMeTest.svelte"
import Poster from '$components/tuw/Poster.svelte'

export const get = async () => {

    const { html, css } = Poster.render()
    return {
        body: {
            html,
            css: css.code,
            component: RenderMeTestSvelte
        }
    }
}