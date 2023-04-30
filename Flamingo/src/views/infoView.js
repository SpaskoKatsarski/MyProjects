import { html } from '../lib.js'

export function showInfo(ctx) {
    ctx.render(infoTemp())
}

const infoTemp = () => html`
    <h1>Info About the Pink Flamingos</h1>
    <div>They are pink...</div>
`