import { checkUserNav } from './auth.js';
import { showCatalogView } from './catalog.js';

document.getElementById('login-form').addEventListener('submit', onLogin);
const section = document.getElementById('login-view');
section.remove();

export function showLoginView() {
    document.querySelector('main').appendChild(section);
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    try {
        await login(email, password);
        checkUserNav();
        showCatalogView();

        section.remove();
    } catch (err) {
        alert(err.message);
    }

    event.target.reset();
}

async function login(email, password) {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
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