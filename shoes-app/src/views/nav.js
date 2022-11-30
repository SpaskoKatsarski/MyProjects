import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const nav = document.querySelector('nav');

const navTemplate = (hasUser) => html`
<div>
    <a href="/catalog">Dashboard</a>
    <a href="/search">Search</a>
</div>
${hasUser ? 
    html`<div class="user">
            <a href="/create">Add Pair</a>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
          </div>`
    :
    html`
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
    `
}
`;

async function onLogout() {
    await logout();
    page.redirect('/catalog');
    updateNav();
}

export function updateNav() {
    const user = getUserData();
    render(navTemplate(!!user), nav);
}