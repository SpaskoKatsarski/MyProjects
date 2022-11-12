import { checkUserNav, onLogout } from './auth.js';
import { showCatalogView } from './catalog.js';
import { showLoginView } from './login.js';
import { showRegisterView } from './register.js';
import './details.js';

const views = {
    'catalog-link': showCatalogView,
    'login-link': showLoginView,
    'register-link': showRegisterView,
    'logout-link': onLogout
}

document.querySelector('nav').addEventListener('click', onNavigate);

checkUserNav();

// Start application in catalog view
showCatalogView();

function onNavigate(event) {
    if (event.target.tagName === 'A') {
        const id = event.target.id;
        const view = views[id];

        if (typeof(view) === 'function') {
            document.querySelector('main').replaceChildren();
            view();
        }
    }
}