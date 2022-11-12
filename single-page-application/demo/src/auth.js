import { showCatalogView } from './catalog.js';

export function checkUserNav() {
    const username = sessionStorage.getItem('username');

    if (username) {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'none');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'inline');
        document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`;
    } else {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'inline');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'none');
    }
}

document.getElementById('logout-link').addEventListener('click', onLogout);

function onLogout() {
    event.preventDefault();

    const token = sessionStorage.getItem('accessToken');

    fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': token
        }
    });

    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('acessToken');

    checkUserNav();
    showCatalogView();
}