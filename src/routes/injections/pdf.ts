import { renderOther, renderToPdf } from "../../util/render-pdf"
import RenderMeTestSvelte from "../../components/RenderMeTest.svelte"
import type { RequestHandler } from "@sveltejs/kit"
import fs from 'fs'

const makeHtmlDoc = (html: string, css: string): string => `
    <html>
    <body>
    ${html}
    <style>
    ${css}
    </style>
    </body>
    </html>
`

export const get: RequestHandler = async () => {

    const { html, css } = RenderMeTestSvelte.render({name: 'Jacob'})
    const pdfBuffer = await renderToPdf(html, css.code)
    // const pdfBuffer = await renderOther(html, css.code)

    // return {
    //     body: {
    //         html,
    //         css: css.code,
    //         component: RenderMeTestSvelte
    //     }
    // }

    fs.writeFileSync('/tmp/out.pdf', pdfBuffer)

    return {
        headers: {
            'content-type': 'application/pdf'
        },
        body: pdfBuffer
    }
    return {
        body: makeHtmlDoc(html, css.code)
    }
}