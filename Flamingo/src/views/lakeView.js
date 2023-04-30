import { html } from "../lib.js";

export function showLakeView(ctx) {
    ctx.render(lakeViewTemp())
}

const lakeViewTemp = () => html`
    <h1>This Page is about Atanasovo Lake</h1>
`