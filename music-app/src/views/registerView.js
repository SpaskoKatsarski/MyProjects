import { createSubmitHandler } from "../util.js";
import { register } from "../api/user.js";
import { html } from "../lib.js";

export function showRegister(ctx) {
    ctx.render(registerTemp(createSubmitHandler(onRegister)));

    async function onRegister(data) {
        const email = data['email'];
        const password = data['password'];
        const confPass = data['conf-pass'];

        if (!email || !password || !confPass) {
            return alert('All fields are required!');
        }

        if (password != confPass) {
            return alert('Passwords do not match!');
        }

        await register(email, password);
        ctx.page.redirect('/')
        ctx.updateNav();
    }
}

const registerTemp = (handler) => html`
<section id="registerPage">
    <form @submit=${handler}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`;

