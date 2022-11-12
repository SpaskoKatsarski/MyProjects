import { checkUserNav } from "./auth.js";
import { showCatalogView } from "./catalog.js";

document.getElementById('register-form').addEventListener('submit', onRegister);

const section = document.getElementById('register-view');
section.remove();

export function showRegisterView() {
    document.querySelector('main').appendChild(section);
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, username, password, repass } = Object.fromEntries(formData);

    try {
        if (password !== repass) {
            throw new Error('Passowrds do not match!');
        }

        await register(email, username, password);
        checkUserNav();
        showCatalogView();

        section.remove();
    } catch (err) {
        alert(err.message);
    }

    event.target.reset();
}

async function register(email, username, password) {
    const response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
    });

    if (response.ok != true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();

    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('accessToken', data.accessToken);
}