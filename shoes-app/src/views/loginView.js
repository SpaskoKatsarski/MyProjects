import { login } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

export function showLogin(ctx) {
    ctx.render(loginTemp(createSubmitHandler(onLogin)));

    async function onLogin(data) {
        debugger;
        const { email, password } = data;

        if (!email || !password) {
            return alert('All fields are required!');
        }

        await login(email, password)

        ctx.page.redirect('/catalog');
        ctx.updateNav();
    }
}

const loginTemp = (handler) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${handler} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`