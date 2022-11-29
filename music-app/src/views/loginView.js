import { createSubmitHandler } from "../util.js";
import { login } from "../api/user.js";
import { html } from "../lib.js";

export function showLogin(ctx) {
    ctx.render(loginTemp(createSubmitHandler(onLogin)));

    async function onLogin(data) {
        debugger;
        const { email, password } = data;
        await login(email, password);
        ctx.page.redirect('/')
        ctx.updateNav();
    }
}

const loginTemp = (handler) => html`
<section id="loginPage">
    <form @submit=${handler}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;

