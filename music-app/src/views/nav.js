import { logout } from "../api/user.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";
import { page } from "../lib.js";

const header = document.querySelector('header');

export function updateNav() {
    const user = getUserData();
    render(navTemplate(!!user), header);
}

const navTemplate = (hasUser) => html`
${
    hasUser ? html`
            <nav>
                <img src="./images/headphones.png">
                <a href="/">Home</a>
                <ul>
                    <!--All user-->
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/search">Search</a></li>
                    <!--Only user-->
                    <li><a href="/create">Create Album</a></li>
                    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>
                </ul>
            </nav>
        ` 
        : html`
            <nav>
                <img src="./images/headphones.png">
                <a href="/">Home</a>
                <ul>
                    <!--All user-->
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/search">Search</a></li>
                    <!--Only guest-->
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>
        `
}`;

async function onLogout() {
    await logout();
    page.redirect('/');
    updateNav();
}
