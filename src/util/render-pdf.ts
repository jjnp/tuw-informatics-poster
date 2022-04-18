import htmlToPdf from 'html-pdf'
import other from 'html-pdf-node'

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

export const renderToPdf = (html: string, css: string): Promise<Buffer> => {
    const pageSource = makeHtmlDoc(html, css)
    const options = {
        type: 'pdf',
        height: '1189mm',
        width: '841mm',
        base: 'http://localhost:3000',
        renderDelay: 1000
    }
    return new Promise<Buffer>((resolve, reject) => {
        htmlToPdf.create(pageSource, options).toBuffer((err, buffer) => {
            if (err) {
                reject(err)
            } else {
                resolve(buffer)
            }
        })
    })
}

export const renderOther = async (html: string, css: string): Promise<Buffer> => {
    const options = { format: 'A0', printBackground: true };
    const pageSource = makeHtmlDoc(html, css)
    console.log(pageSource)
    return await other.generatePdf({ content: pageSource }, options)
}
