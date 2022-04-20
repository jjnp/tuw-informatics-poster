import fs from 'fs';


export const svgToB64 = (path: string): string => {
    return `data:image/svg+xml;base64,${fs.readFileSync(path, 'base64')}`
}