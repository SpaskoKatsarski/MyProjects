import { html } from '../lib.js'

export function showArea(ctx) {
    debugger;
    ctx.render(areaViewTemp())
}

const areaViewTemp = () => html`
    <h1>Areas</h1>
`