//Import views
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalogView.js";
import { showCreate } from "./views/createView.js";
import { showHome } from "./views/homeView.js";
import { showLogin } from "./views/loginView.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/registerView.js";

// get root element to pass it as param in render
const main = document.querySelector('main');

//attach middle ware
page(decorateContext);

//create page routing
page('/', showHome);
page('/catalog', showCatalog);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/search', () => console.log('search'));

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}