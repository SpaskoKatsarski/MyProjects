import { html } from "../lib.js";

export function showAbout(ctx) {
    ctx.render(aboutTemp())
}

const aboutTemp = () => html`
    <h1>This Page is the About page</h1>
    <h1>MAY BE REPLACED OR REMOVED</h1>
`