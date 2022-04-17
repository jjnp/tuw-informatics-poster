import { renderToPdf } from "../../util/render-pdf"
import RenderMeTestSvelte from "../../components/RenderMeTest.svelte"

export const get = async () => {

    const { html, css } = RenderMeTestSvelte.render()
    // const pdfBuffer = await renderToPdf(html, css)

    return {
        body: {
            html,
            css: css.code,
            component: RenderMeTestSvelte
        }
    }
}