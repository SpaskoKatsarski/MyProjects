import { html } from "../lib.js";

export function showHome(ctx) {
    ctx.render(homeTemp())
}

const homeTemp = () => html`
<section id="welcomePage">
    <div id="welcome-message">
        <h1>Welcome to</h1>
        <h1>My Flamingo Application!</h1>
    </div>
</section>
`;